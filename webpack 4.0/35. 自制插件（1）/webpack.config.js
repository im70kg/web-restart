const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	resolveLoader: {
		modules: ['node_modules', './loaders']
	},
	module: {
		rules: [{
			test: /\.js/,
			use: [
				{
					loader: 'replaceLoader',
				},
				{
					loader: 'replaceLoaderAsync',
					options: {
						name: 'lee'
					}
				},
			]
		}]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	}
}