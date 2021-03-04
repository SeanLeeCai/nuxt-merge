const nuxtMerge = require('../nuxt-merge')
const baseConfig = require('./base.config')
const devConfig = require('./dev.config')

const env = process.env.NODE_ENV || 'dev'
const configMapper = {
  dev: devConfig,
  // test: testConfig,
  // prod: prodConfig
}
const envConfig = configMapper[env]

module.exports = nuxtMerge(baseConfig, envConfig)
