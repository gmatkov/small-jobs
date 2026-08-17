import { serverSupabaseClient } from '#supabase/server';
import { z } from 'zod';

const createAdSchema = z.object({
  title: z.string().trim().min(1, 'Naslov je obavezan'),
  description: z.string().trim().min(1, 'Opis je obavezan'),
  category_id: z.string().uuid('Kategorija nije ispravna'),
  postal_code: z.string().trim().min(1, 'Poštanski broj je obavezan'),
  location: z.string().trim().min(1, 'Lokacija je obavezna'),
  price: z.number().int().positive().nullable(),
  contact_method: z.enum(['message', 'phone', 'both']),
});

type CreateAdBody = z.infer<typeof createAdSchema>;

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<any>(event);

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  const body = await readBody<CreateAdBody>(event);

  const result = createAdSchema.safeParse(body);

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Neispravni podaci oglasa',
      data: result.error.flatten(),
    });
  }

  const { data, error } = await supabase
    .from('ads')
    .insert({
      user_id: user.id,
      title: result.data.title,
      description: result.data.description,
      category_id: result.data.category_id,
      postal_code: result.data.postal_code,
      location: result.data.location,
      price: result.data.price,
      contact_method: result.data.contact_method,
    })
    .select()
    .single();

  if (error) {
    console.error('Create ad error:', error);

    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }

  return {
    ad: data,
  };
});
