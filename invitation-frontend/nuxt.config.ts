// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: true, // Roboto 폰트 추가
      Montserrat: true, // Montserrat 폰트 추가
      Lato: true, // Lato 폰트 추가
      'Playfair Display': true, // Playfair Display 폰트 추가 (폰트 이름에 공백이 있으므로 따옴표로 감싸줌)
      'Dancing Script': true // Dancing Script 폰트 추가 (폰트 이름에 공백이 있으므로 따옴표로 감싸줌)
    }
  },
  app: {
    baseURL: '/invitation/',
    buildAssetsDir: 'assets',
    head: {
      title: '기륜 & 희은 결혼해요',
      script: [
        {
          src: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_KPI_KEY}`
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/invitation/logo.png', sizes: 'any' },
      ]
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
})
