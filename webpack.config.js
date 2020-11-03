const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        filename: 'main.js'
    },
    plugins: [ 
        new MiniCssExtractPlugin(),
        new TerserJSPlugin(), 
        new OptimizeCSSAssetsPlugin() ],
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
                    {   loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader'
                ]
            }
        ]
    }
};
