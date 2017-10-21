const path = require('path');
const webpack = require('webpack')

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./index',
	],
	output: {
		path: '/',
		filename: 'bundle.js',
		sourceMapFilename: 'bundle.map',
		publicPath: 'http://localhost:3000/dist/'
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{ test: /\.js$/, loader:'babel-loader', exclude: /node_modules/}
		]
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoEmitOnErrorsPlugin()
    ],
	target: 'web'
}