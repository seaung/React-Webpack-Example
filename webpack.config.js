var path = require('path');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'temp/'
	},
	devServer: {
		contentBase: './',
		host: 'localhost',
		compress: true,
		port: 4200
	},
	module: {
		rules: [
			{
				test: /\.(js|es|es6|jsx)$/,
				exclude: /(node_module)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { modules: false }],
							['@babel/react']
						]
					}
				}
			}
		]
	}
}
