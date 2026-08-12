import { createServerClient } from '@supabase/ssr';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const supabase = createServerClient(
    config.public.supabase.url,
    config.public.supabase.key,
    {
      cookies: {
        getAll() {
          const cookies = parseCookies(event);

          return Object.entries(cookies).map(([name, value]) => ({
            name,
            value,
          }));
        },

        setAll(cookies) {
          cookies.forEach(({ name, value, options }) => {
            setCookie(event, name, value, options);
          });
        },
      },
    },
  );

  const body = await readBody(event);
  const { email, password } = body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw createError({
      statusCode: 401,
      statusMessage: error.message,
    });
  }

  return {
    user: data.user,
  };
});
