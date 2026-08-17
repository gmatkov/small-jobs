// server/api/register.post.ts
import { createClient } from '@supabase/supabase-js';
import { serverSupabaseClient } from '#supabase/server'; // Nuxt wrapper za auto-cookies
import { z } from 'zod';

// 1. Zod shema s tvojim poljima (ispravno hvata i prazne stringove)
const registerSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email je obavezan.' })
    .email({ message: 'Neispravan format emaila.' }),
  password: z
    .string()
    .min(1, { message: 'Lozinka je obavezna.' })
    .min(6, { message: 'Lozinka mora imati barem 6 znakova.' }),
  firstName: z.string().min(1, { message: 'Ime je obavezno.' }),
  lastName: z.string().min(1, { message: 'Prezime je obavezno.' }),
  phone: z.string().min(1, { message: 'Broj telefona je obavezan.' }),
  city: z.string().min(1, { message: 'Grad je obavezan.' }),
  postalCode: z.string().min(1, { message: 'Poštanski broj je obavezan.' }),
  userType: z.enum(['client', 'craftsman'], {
    message: 'Morate odabrati ulogu.',
  }),
});

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  // 2. Zod validacija
  const result = registerSchema.safeParse(body);
  if (!result.success) {
    throw createError({
      statusCode: 400,
      // Uzimamo poruku prve greške iz Zod issues niza
      statusMessage: result.error.issues[0]?.message || 'Neispravan unos.',
    });
  }

  // Podaci su provjereni i čisti
  const {
    email,
    password,
    firstName,
    lastName,
    phone,
    city,
    postalCode,
    userType,
  } = result.data;

  // 3. Kreiranje auth korisnika preko Nuxt klijenta (Ovo ispravno postavlja kolačiće!)
  const supabase = await serverSupabaseClient(event);
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    if (authError.message.includes('already registered')) {
      throw createError({
        statusCode: 409,
        statusMessage: 'Email je već registriran. Molimo prijavite se.',
      });
    }
    throw createError({
      statusCode: 400,
      statusMessage: authError.message,
    });
  }

  if (!authData.user) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Registracija nije uspjela.',
    });
  }

  // 4. Inicijalizacija Admin klijenta (service_role) za bazu i potencijalni cleanup
  const supabaseAdmin = createClient(
    config.public.supabaseUrl,
    config.supabaseSecretKey, // Tvoj tajni service_role ključ
  );

  // Ubacivanje profila sa service_role
  const { error: profileError } = await supabaseAdmin.from('profiles').insert({
    id: authData.user.id,
    first_name: firstName.trim(),
    last_name: lastName.trim(),
    phone: phone.trim(),
    city: city.trim(),
    postal_code: postalCode.trim(),
    user_type: userType,
  });

  // 5. Ako profil ne uspije - pokreni tvoj odličan cleanup
  if (profileError) {
    console.error('Profile insert error:', profileError);

    // Brisanje korisnika iz auth sustava preko admin ovlasti
    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(
      authData.user.id,
    );

    if (deleteError) {
      console.error('Cleanup failed - user orphaned:', {
        userId: authData.user.id,
        email: email,
        error: deleteError,
      });
    } else {
      console.log(
        'User deleted successfully during cleanup:',
        authData.user.id,
      );
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Registracija neuspješna. Molimo pokušajte ponovno.',
    });
  }

  // 6. Uspješna registracija
  return {
    success: true,
    user: {
      id: authData.user.id,
      email: authData.user.email,
    },
  };
});
