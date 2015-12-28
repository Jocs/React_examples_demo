var webpack = require('webpack');
module.exports = {
	devtool: 'source-map',
	entry: './js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			optput: {
				comments: false
			},
			minimize: true,
			compress: {
				warnings: false
			}
		})
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader:'babel'
		},{
			test: /\.css$/,
			exclude: /node_modules/,
			loader:'style!css'
		},{
			test: /\.(woff|woff2|ttf|svg)$/,
			loader: 'url?limit=100000',
			exclude: /node_modules/
		},{
			test: /\.(eot|png)$/,
			loader: 'file',
			exclude: /node_modules/
		}]
	}
};