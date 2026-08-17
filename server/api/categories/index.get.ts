import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient<any>(event);

  const { data, error } = await supabase
    .from('categories')
    .select('id, name, slug')
    .order('name', { ascending: true });

  if (error) {
    console.error('Get categories error:', error);

    throw createError({
      statusCode: 500,
      statusMessage: 'Greška pri dohvaćanju kategorija',
    });
  }
  console.log(data, 'categories');

  return {
    categories: data,
  };
});
