var path = require('path')
var glob = require('glob')

var build = {
  env: require('./prod.env'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  productionSourceMap: true,
  productionGzip: false,
  productionGzipExtensions: ['js', 'css']
}

function getEntry(globPath) {
  var entries = {},basename;

  glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry));
    entries[basename] = entry;
  });
  return entries;
}

var pages = getEntry('src/pages/**/*.html');
 
//入口 index: path.resolve(__dirname, '../dist/index.html')
for (var pathname in pages) {
  build[pathname] = path.resolve(__dirname, '../dist/' + pathname + '.html')
}

module.exports = {
  build:build,
  // build: {
  //   env: require('./prod.env'),
  //   index: path.resolve(__dirname, '../dist/index.html'),
  //   assetsRoot: path.resolve(__dirname, '../dist'),
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: '/',
  //   productionSourceMap: true,
  //   productionGzip: false,
  //   productionGzipExtensions: ['js', 'css'],
  //   bundleAnalyzerReport: process.env.npm_config_report
  // },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
