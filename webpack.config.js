let path = require("path");
let postcssPlugins = [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
    require('autoprefixer'),
];

module.exports = {
    entry: "./app/assets/scripts/scripts.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app"),
    },
    mode: "development",
    devServer: {
        before: (app, server) => server._watch('./app/**/*.html'),
        contentBase: path.join(__dirname, "app"),
        hot: true,
        port: 3000,
        host: "192.168.8.106"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: postcssPlugins,
                            }
                        }
                    }
                ]
            }
        ]
    }
}