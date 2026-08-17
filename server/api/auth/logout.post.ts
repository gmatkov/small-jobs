// server/api/logout.post.ts
import { serverSupabaseClient } from '#supabase/server';

export default defineEventHandler(async (event) => {
  try {
    const supabase = await serverSupabaseClient(event);

    // 1. Poništavamo sesiju u bazi (global) i na svim uređajima.
    // Nuxt modul ovdje AUTOMATSKI presreće odgovor i sam briše ispravne kolačiće!
    const { error } = await supabase.auth.signOut({ scope: 'global' });

    if (error) {
      console.error('Greška pri Supabase odjavi:', error.message);
      throw createError({
        statusCode: 500,
        statusMessage: 'Došlo je do pogreške pri odjavi s poslužitelja.',
      });
    }

    return {
      success: true,
      message: 'Uspješno ste odjavljeni.',
    };
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Interna pogreška poslužitelja.',
    });
  }
});
