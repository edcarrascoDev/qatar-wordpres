const ExtractText = require('extract-text-webpack-plugin');
const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

const extractSCSS = new ExtractText({
    filename: './blocks.build.css',
});

const plugins = [extractSCSS];

const scssConfig = {
    use: [
        {
            loader: 'css-loader',
        },
        {
            loader: 'sass-loader',
            options: {
                outputStyle: 'compressed',
            },
        },
    ],
};

module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    mode: debug ? 'development' : 'production',
    entry: './src/blocks.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'blocks.build.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[hash].[ext]',
                    },
                },
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSCSS.extract(scssConfig),
            },
        ],
    },
    plugins: plugins,
};
