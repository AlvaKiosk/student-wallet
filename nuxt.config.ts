// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:[
    '@quasar/extras/mdi-v7/mdi-v7.css',
    '~/assets/styles/quasar.sass',
    // "@/assets/iam/resources/css/style.css",
  ],
  modules: [
    // "nuxt-vue3-google-signin", 
    "@pinia/nuxt",
    'nuxt-quasar-ui'
  ],
  quasar: {
    plugins: [
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
    ],
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons-outlined'],
    },
  },
  devtools: { enabled: true }
})
