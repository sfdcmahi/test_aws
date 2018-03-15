const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   devtool: 'inline-source-map',
   plugins: [
    new webpack.DefinePlugin({
      "APP_HOST_URL": JSON.stringify('https://localhost')
    })
   ]
});