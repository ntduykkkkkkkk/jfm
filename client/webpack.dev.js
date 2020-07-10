const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// combine with webpack.common.js to get basic configuration to use
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'dist',
        hot: true
    },
    module: {
        // load scss files by using style-loader, css-loader, sass-loader
        rules: [{
            test: /\.(scss|sass)$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }]
    },
    watch: true,
    plugins: [
        // Automatically reload if any change
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack react1',
            inject: false,
            template: require('html-webpack-template'),
            meta: [{
                name: 'description',
                content: 'A better default template for html-webpack-plugin'
            }],
            mobile: true,
            lang: 'en-US',
            bodyHtmlSnippet: '<div id="root"></div>',
            scripts: [
                {
                    src: '/js/index.js',
                    type: 'text/javascript'
                }
            ]
        })
    ]
})