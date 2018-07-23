const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (env, argv) => {

    const isProd = argv.mode === 'production';

    return {
        entry: ['babel-polyfill', path.normalize(__dirname + '/src/js/main')],
        devtool: 'cheap-module-source-map',
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'dist'),
            publicPath: "/public/"
        },
        module: {
            rules: [
                {
                    test: /\.js|jsx$/,
                    exclude: /node_modules/,
                    include: [path.resolve(__dirname, 'src', 'js')],
                    use: {
                        loader: "babel-loader",
                        options: {
                            plugins: ['transform-runtime'],
                            presets: ['env', 'react']
                        }
                    }
                }, {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => {
                                    require('autoprefixer')()
                                }
                            }
                        },
                        'sass-loader'
                    ],
                }
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            hot: true
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            }),
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
    }
};