// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://googleapis.com' },
        { rel: 'preconnect', href: 'https://gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/supabase'],
  vite: {
    optimizeDeps: {
      include: ['vee-validate', '@vee-validate/zod', 'zod'],
    },
  },
  supabase: {
    redirect: false,
    useSsrCookies: true,

    // 3. Eksplicitno zabranjujemo klijentu spremanje sesije na frontendu
    clientOptions: {
      auth: {
        persistSession: false,
      },
    },
  },
});
