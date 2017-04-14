exports.loadCSS = function({ include, exclude } = {}) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include,
                    exclude,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => ([
                                    require('autoprefixer'),
                                    require('css-mqpacker'),
                                    require('cssnano')
                                ])
                            }
                        }
                    ]
                }
            ]
        }
    };
};
