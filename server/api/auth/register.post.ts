import { serverSupabaseClient } from '#supabase/server';
import { readBody, createError } from 'h3';

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  const body = (await readBody(event)) || {};
  console.log('Register body:', body);

  const {
    email,
    password,
    firstName,
    lastName,
    phone,
    city,
    postalCode,
    address,
    oib,
  } = body as Record<string, any>;

  if (
    !email ||
    !password ||
    !firstName ||
    !lastName ||
    !phone ||
    !city ||
    !postalCode
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    });
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,

    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
        phone,
        city,
        postal_code: postalCode,
        address,
        oib,
      },
    },
  });

  if (error) {
    console.error('Supabase signUp error:', error);

    const message =
      typeof error?.message === 'string'
        ? error.message
        : 'Registration failed';

    throw createError({
      statusCode: 400,
      statusMessage: message,
    });
  }

  return {
    user: data.user,
  };
});
