const path = require('path');

module.exports = {
    mode: 'production',
    entry: './main.js',
    output: {
        path: __dirname,
        filename: './main.jsx'
    },
    target: ['web', 'es5'],
	module: {
        rules: [
          {
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: 'babel-loader'
          }
        ]
    }
};
