const colors = require('vuetify/es5/util/colors').default

module.exports = {
  buildDir: 'functions/.nuxt',
  // mode: 'universal',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ออร์ก้า',
    title: 'สั่งอาหารออนไลน์',
    script: [
      { hid: 'liff-line', src: 'https://static.line-scdn.net/liff/edge/2.1/sdk.js', defer: 'true', mode: 'client' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'สั่งอาหารง่ายๆ กับออร์ก้า ชาบู' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/orca shabu icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@400;600&display=swap'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/liff-line-inject.js' },
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: { },
  proxy: { 
    '/img/': { 
      target: 'https://orca-richmenu.firebaseapp.com', 
      pathRewrite: {'.+?(?=img)': '/img/'} 
    } 
  },

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    //analyze: true,
    //vendor: ['liff-line-inject.js'],
    extend (config, ctx) {
    }
  }
}
