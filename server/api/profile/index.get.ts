import { serverSupabaseClient } from '#supabase/server';
import { createError } from 'h3';

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  // Base user data
  const userData: any = {
    id: user.id,
    email: user.email,
    created_at: user.created_at,
  };

  // Add profile data if exists
  if (!profileError && profile) {
    Object.assign(userData, profile);
  }

  return userData;
});
