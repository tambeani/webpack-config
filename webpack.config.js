const path = require('path');
const webpack = require('webpack')

/*
    1. Define an entry point (main file that loads the application)
    2. Specify the directory of the output file
    3. Define the loader and associate with file glob search (using test property)
    4. Set options for the loader (help to load plugins)
*/
module.exports = {
    entry: './app/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
      },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
        ]
    }
};
