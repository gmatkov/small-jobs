// server/api/login.post.ts
import { serverSupabaseClient } from '#supabase/server';
import { z } from 'zod';

const MAX_ATTEMPTS = 5;
const WINDOW_MS = 60 * 1000;
const storage = useStorage('cache');

// Zod shema - ispravno hvata i prazna polja (.min(1)) i format
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email je obavezan.' })
    .email({ message: 'Unesite ispravan format email adrese.' }),
  password: z
    .string()
    .min(1, { message: 'Lozinka je obavezna.' })
    .min(6, { message: 'Lozinka mora imati najmanje 6 znakova.' }),
});

export default defineEventHandler(async (event) => {
  // 1. RATE LIMIT PROVJERA
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown';
  const storageKey = `rate-limit:login:${ip}`;

  const now = Date.now();
  const rateData: any = (await storage.getItem(storageKey)) || {
    attempts: 0,
    resetAt: now + WINDOW_MS,
  };

  if (now > rateData.resetAt) {
    rateData.attempts = 0;
    rateData.resetAt = now + WINDOW_MS;
  }

  if (rateData.attempts >= MAX_ATTEMPTS) {
    throw createError({
      statusCode: 429,
      statusMessage:
        'Previše neuspješnih pokušaja. Pokušajte ponovno malo kasnije.',
    });
  }

  // 2. VALIDACIJA PODATAKA PREKO SAFE_PARSE
  const body = await readBody(event);
  const result = loginSchema.safeParse(body);

  // Ako Zod baci grešku, ovdje uzimamo točnu poruku iz prvog elementa niza [0]
  if (!result.success) {
    rateData.attempts += 1;
    await storage.setItem(storageKey, rateData);

    throw createError({
      statusCode: 400,
      statusMessage: result.error.issues[0]?.message || 'Neispravan unos.',
    });
  }

  // Podaci su čisti, izvlačimo ih
  const { email, password } = result.data;

  // 3. SUPABASE PRIJAVA
  try {
    const supabase = await serverSupabaseClient(event);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      rateData.attempts += 1;
      await storage.setItem(storageKey, rateData);

      throw createError({
        statusCode: 400,
        statusMessage: 'Neispravni podaci za prijavu.',
      });
    }

    // Sve je prošlo, briši pokušaje
    await storage.removeItem(storageKey);

    return {
      success: true,
      user: { id: data.user?.id, email: data.user?.email },
    };
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage:
        error.statusMessage || 'Došlo je do pogreške na poslužitelju.',
    });
  }
});
