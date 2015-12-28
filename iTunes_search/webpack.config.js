var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./js'
	],
	output: {
		publicPath: '/dist/',
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(bower_components|node_modules)/,
			loaders: ['react-hot', 'babel']
		},{
			test: /\.css$/,
			loader: 'style!css',
			exclude: /node_modules/
		},{
			test: /\.(woff|woff2|ttf|svg)$/,
			loader:'url?limit=100000',
			exclude: /node_modules/
		},{
			test:/\.(eot|png)$/,
			loader: 'file',
			exclude: /node_modules/
		}]
	}
};