const path = require('path')
// const PostCompilePlugin = require('webpack-post-compile-plugin')
// const TransformModulesPlugin = require('webpack-transform-modules-plugin')

module.exports = {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'first-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  router: {
    base: "/pages",
    mode: "history"
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/util.js", ssr: false },
    { src: "~/plugins/bus.js", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['cube-ui'],
    loaders: {
      stylus: {
        'resolve url': true,
        import: [path.resolve(__dirname, './assets/theme')]
      }
    },
    plugins: [
      // new PostCompilePlugin(),
      // new TransformModulesPlugin()
    ]
  },
}
