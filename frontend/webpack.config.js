const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
    return {
        entry: "./src/index.jsx",
        output: {
            path: path.resolve(__dirname, "dist"),
            publicPath: "/",
            filename: "app.bundle.js",
        },
        module: {
            rules: [{
                    test: /\.jsx?$/, // the extra `x?` must be added for JSX files
                    exclude: /node_modules/,
                    loader: "babel-loader", // Babel is configured in .babelrc
                },
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"], // .jsx files must be included
        },
        plugins: [
            // add the plugin to your plugins array
            new webpack.DefinePlugin({
                "process.env.BACKEND_URL": JSON.stringify(env.BACKEND_URL),
            }),
        ],
        devServer: {
            contentBase: path.join(__dirname, "dist/"),
            port: 8080,
            publicPath: "http://localhost:8080/",
            hot: true,
        },
    };
};