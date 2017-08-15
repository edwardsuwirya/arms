var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const API_URL = process.env.API_URL = 'http://localhost:6900';

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: API_URL + '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            favicon: 'src/public/images/favicon.ico',
            baseUrl: '/'
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'API_URL': JSON.stringify(API_URL)
            }
        })
    ],

    devServer: {
        compress: true,
        clientLogLevel: 'info',
        proxy: {
            '/nodeLogin': {
                target: 'http://localhost:8888/',
                pathRewrite: {'^/nodeLogin': ''},
                secure: false
            },
            '/bankRelation': {
                target: 'http://localhost:8081/',
                pathRewrite: {'^/bankRelation': ''},
                secure: false
            },
            '/interestRate': {
                target: 'http://localhost:8082/',
                pathRewrite: {'^/interestRate': ''},
                secure: false
            },
            '/debtorCategory': {
                target: 'http://localhost:8083/',
                pathRewrite: {'^/debtorCategory': ''},
                secure: false
            },
            '/collateralCharacteristic': {
                target: 'http://localhost:8084/',
                pathRewrite: {'^/collateralCharacteristic': ''},
                secure: false
            },
            '/creditRating': {
                target: 'http://localhost:8085/',
                pathRewrite: {'^/creditRating': ''},
                secure: false
            }, '/universalLoan': {
                target: 'http://localhost:8900/',
                pathRewrite: {'^/universalLoan': ''},
                secure: false
            },
            '/**': {
                target: 'http://localhost:8080/',
                secure: false
            }
        },
        historyApiFallback: true,
        stats: 'verbose'
    }
});
