const path = require('path');

module.exports = {
    entry: 'index.js',
    mode: 'development',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   }
    resolve: {
        fallback: {
        path: false,
        url: false,
        util: false,
        stream: false,
        buffer:false,
        string_decoder: false,
        querystring:false,
        http: false,
        crypto: false,
        zlib: false, 
        fs: false
        }
    }
};
