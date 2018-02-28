var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: {
        main: './main.js',
        vendor: './vendor.js'
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },

    plugins: [
        new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery',
           'window.jQuery': 'jquery',
       }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ]

};
