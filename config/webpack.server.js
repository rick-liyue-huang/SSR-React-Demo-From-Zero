
const path = require('path');
// it can avoid to bundle the whole node_modules dependencies, but only get the path from the source node_modules, thus the bundle_server.js is not too big.
const webpackNodeExternals = require('webpack-node-externals');


// this is for server
module.exports = {
	target: 'node',
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: path.resolve(__dirname, '..', 'src', 'server.js'),
	output: {
		filename: "bundle_server.js",
		path: path.resolve(__dirname, '..', 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: '/node_modules'
			}
		]
	},
	// it will no bundle for the node_modules, if you check the bundle_server.js, no dependencies such as webpack.js.
	externals: [webpackNodeExternals()]
}
