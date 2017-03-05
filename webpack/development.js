const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./base.js');
const mainEntry = require('./common.js');
const styles = require('./css.js');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        entry: {
            'main': mainEntry
        },
        devtool: 'cheap-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, '..', 'build'),
            hot: true,
            host: '127.0.0.1',
            port: 8080
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('development')
                }
            })
        ]
    }, styles.loadCSS())
}
