var path=require("path");
var webpack=require("webpack");
var htmlWebpackPlugin=require("html-webpack-plugin");
var extractTextWebpackPlugin=require("extract-text-webpack-plugin");
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var uglifyPlugin=webpack.optimize.__UglifyJsPlugin
var config={
    entry:path.resolve(__dirname,"./src/index.js"),
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    devServer:{
        contentBase:"dist",
        inline:true,
        port:5000,
        stats:{
            colors:true
        }
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel",
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                loader: extractTextWebpackPlugin.extract("style-loader","css-loader","less-loader"),
                include:path.resolve(__dirname,"src")

            }

        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"搭建前端工作流",
            template:"./src/index.html"
        }),
        new extractTextWebpackPlugin("style.css"),
        new openBrowserWebpackPlugin({ url: 'http://localhost:5000' }),
        new webpack.optimize.UglifyJsPlugin({
            compress:false
        })
    ]
};
module .exports=config;