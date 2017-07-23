const webpack = require('webpack');
const path = require("path");


const config = {
    entry: "./app.ts",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
        ]
    },
    devtool: "cheap-module-source-map",
};

module.exports = config;
