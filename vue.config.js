var path = require('path')
function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('components', resolve('src/components')) // key,value自行定义，比如.set('srcsrc', resolve('src/components'))
      .set('assets', resolve('src/assets')) 
      .set('network', resolve('src/network')) 
      .set('common', resolve('src/components')) 
  }
}

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'assets': '@/assets',
//         'common': '@/common',
//         'components': '@/components',
//         'network': '@/network',
//         'views': '@/views',
//       }
//     }
//   }
// }
