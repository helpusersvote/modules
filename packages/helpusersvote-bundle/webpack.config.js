const glob = require('glob')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const plugins = []
const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  plugins.push(new UglifyJsPlugin())
}

const entry = glob
  .sync('./src/*.js')
  .filter(file => !/common/.test(file))
  .reduce((fileMap, file) => {
    const nameParts = file.split('/')
    const nameText = nameParts[nameParts.length - 1]
    const name = nameText.split('.')[0]

    fileMap[name] = file

    return fileMap
  }, {})

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  resolve: {
    modules: ['node_modules']
  },
  plugins
}
