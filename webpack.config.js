const path = require('path');

module.exports = {
	entry: './index',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js',
		sourceMapFilename: 'bundle.map'
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{ test: /\.js$/, loader:'babel-loader', exclude: /node_modules/}
		]
	}
}