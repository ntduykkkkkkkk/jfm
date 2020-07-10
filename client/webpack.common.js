const path = require('path')

module.exports = {
    entry: ['./src/js/index.js', './src/sass/index.scss'],
    output: {
        filename: 'js/index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            // load .js, .jsx by using babel
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: [/node_modules/]
        }]
    }
}