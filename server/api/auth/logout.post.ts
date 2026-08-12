import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  // TODO: Clear session from db
  const { error } = await supabase.auth.signOut({ scope: 'local' });
  // TODO: deleteCookie
  if (error) {
    console.log('Error on Supabase singOut user', error.message);
  }

  deleteCookie(event, 'app-access-token');
  deleteCookie(event, 'app-refresh-token');

  return {
    succes: true,
    message: 'Successfully logged out.',
  };
});
