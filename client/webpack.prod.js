const merge = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.(scss|sass)$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        // clean js and css in dist folder before running build
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist/js', 'dist/css']
        }),
        // minify css file
        new MiniCssExtractPlugin({
            filename: 'css/index.css'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack react',
            inject: false,
            template: require('html-webpack-template'),
            meta: [{
                name: 'description',
                content: 'A better default template for html-webpack-plugin'
            }],
            mobile: true,
            lang: 'en-US',
            bodyHtmlSnippet: '<div id="root"></div>',
            filename: 'index.html'
        })
    ]
})