"use strict";

module.exports = function (env = {}) {

    let path = require("path");
    let HtmlWebpackPlugin = require('html-webpack-plugin');

    const publicPath = path.resolve(__dirname, 'public');
    const jsPath = path.resolve(publicPath, 'js');

    let HtmlWebpackPluginOption = {};
    if (env.build) {
        HtmlWebpackPluginOption.filename = publicPath + "/index.html";
    }

    console.log(env);

    return {
        mode: "development",
        entry: "./src/init.ts",
        output: {
            path: jsPath,
            filename: 'bundle.js'
        },

        devServer: {
            contentBase: publicPath
        },
        resolve: {
            extensions: [".js", ".ts"]
        },
        module: {
            rules: [
                {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
                {test: /\.js$/, enforce: 'pre'}
            ]
        },

        plugins: [
            new HtmlWebpackPlugin(HtmlWebpackPluginOption)
        ]
    };

};