const path = require('path');
const webpack = require('webpack')

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./index',
	],
	devServer: {
		contentBase: '/',
		hot: true,
	},
	output: {
		path: '/',
		filename: 'bundle.js',
		sourceMapFilename: 'bundle.map',
		publicPath: '/'
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