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
                        'css-loader',
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
