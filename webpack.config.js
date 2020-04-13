/*
 * @Author: your name
 * @Date: 2020-04-10 16:28:08
 * @LastEditTime: 2020-04-10 16:44:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WWW\personal\postal\test01\webpack.config.js
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./main.js',
    output:{
        path:__dirname+'/public',
        filename:'bundle.[hash].js'
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],
}
