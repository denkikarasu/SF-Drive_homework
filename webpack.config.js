const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    mode: 'production',
    output: {
        filename: 'main.js'
    },
    plugins: [ new MiniCssExtractPlugin() ],
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
