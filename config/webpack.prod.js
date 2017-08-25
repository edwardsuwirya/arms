var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const API_URL = process.env.API_URL = 'http://mylabstudio.info';

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/arms/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            favicon: 'src/public/images/favicon.ico',
            baseUrl: '/arms'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            },
            compress:{
                warnings: true
            },
            output: {
                comments: false
            },
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'API_URL': JSON.stringify(API_URL)
            }
        }),
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false
            }
        })
    ]
});

