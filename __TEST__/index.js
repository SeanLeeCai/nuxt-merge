const path = require('path')
const fs = require('fs')
const config = require('./nuxt.config')

fs.writeFileSync(path.resolve(__dirname, '../logs/output.log'), JSON.stringify(config, null, 2))
