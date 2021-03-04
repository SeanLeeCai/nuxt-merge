module.exports = {
  dev: true,
  env: {
    apiPrefix: process.env.BASE_URL || 'http://127.0.0.1:3000'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DEV',
    meta: [
      { hid: 'author', name: 'author', content: 'cails' },
    ],
    link: [],
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/dev/console.js", ssr: false, mode: 'client' }
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    splitChunks: {
      layouts: true
    }
  }
}
