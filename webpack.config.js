const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        filename: 'main.js'
    },
    plugins: [ 
        new MiniCssExtractPlugin(),
        new TerserJSPlugin(), 
        new OptimizeCSSAssetsPlugin(),
        new HtmlWebpackPlugin( {
            template: './src/pug/index.pug',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin( {
            template: './src/pug/about.pug',
            filename: 'about.html',
        }),
        new HtmlWebpackPlugin( {
            template: './src/pug/faq.pug',
            filename: 'faq.html',
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin(), 
            new OptimizeCSSAssetsPlugin()]
    },
    module: {
        rules: [ 
            { 
                test: /\.css$/,
                use: [ 
                    {   
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }
            }
        ]
    }
};
