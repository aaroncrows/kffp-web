'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LIFECYCLE_EVENT = process.env.npm_lifecycle_event;
const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new CleanWebpackPlugin(['build'], {
   'exclude': ['index.html', 'main.css', 'favicon.ico', '.gitignore'],
   root: process.cwd()
  })
];

const NODE_ENV = process.env.NODE_ENV || 'development';

const common = {
    env: NODE_ENV,
    entry: {
        main: path.join(__dirname, 'src/js'),
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test:    /\.js?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }
        ]
    }
};

var config;

if (LIFECYCLE_EVENT === 'start' || !LIFECYCLE_EVENT) {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV:  JSON.stringify(NODE_ENV)
            }
        })
    );

    config = merge(
        common, {
        plugins: plugins,
        devtool: 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            progress: true,
            hot: true,
            stats: 'errors-only',
            inline: true,
            host: '127.0.0.1',
            port: 8080
        }
    });
} else {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV:  JSON.stringify(NODE_ENV)
            }
        })
    );

    config = merge(common, {
        plugins: plugins
    });
}

module.exports = config;
