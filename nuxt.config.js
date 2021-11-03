export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Skyle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/vendor/bootstrap/css/bootstrap.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/fontawesome.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/templatemo-digimedia-v3.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/animated.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/owl.css'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'},
    ],
    script: [
      { src: "vendor/jquery/jquery.min.js" },
      { src: "vendor/bootstrap/js/bootstrap.bundle.min.js" },
      { src: "assets/js/owl-carousel.js" },
      { src: "assets/js/animation.js" },
      { src: "assets/js/imagesloaded.js" },
      //{ src: "assets/js/custom.js" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/static/assets/js/chplugin.js", mode: 'client' },
    { src: "~/static/assets/js/custom.js", mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ko'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
