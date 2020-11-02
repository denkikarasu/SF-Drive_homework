const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js'
    },
    plugins: [ new MiniCssExtractPlugin() ],
    module: {
        rules: [ 
            { 
                test: /\.css$/i,
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
