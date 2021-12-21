module.exports = {
    mode: 'production',
    entry: './main.js',
    output: {
        path: __dirname,
        filename: './main.jsx'
    },
    target: ['web', 'es5']
};
