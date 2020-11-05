const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './src/js/index.ts',
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
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: './src/fonts/', to: './fonts/' },
            ],
            options: {
              concurrency: 100,
            },
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
                test: /\.css$/i,
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
                test: /\.pug$/i,
                use: {
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img',
                        name: '[name].[ext]',
                    },
                }
            },
            {
                test: /\.ts$/,
                use: ['ts-loader']
            }
        ]
    }
};
