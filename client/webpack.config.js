const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            { 
                test: /\.(le|c)ss$/,
                use: [ 
                    'style-loader',
                    'css-loader', 
                    'less-loader'
                ],
            },
            {
                test: /\.(ico|png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MongoDb',
            filename: path.resolve(__dirname, 'build', 'index.html'),
            template: path.join('public', 'index.html'),
            favicon: path.join('public', 'favicon.ico')
        }),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css']
    },
    devtool: 'source-map',
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 400
    }
}