const path = require('path');

module.exports = {
    entry: './test.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    devtool: "eval-source-map"
};
