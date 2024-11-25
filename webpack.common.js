const { path } = require('express/lib/application');

module.exports = {
	entry: {
		invoice: path.resolve('./src/pages/Invoice/Invoice.tsx'),
		background: path.resolve('./src/background/background.ts'),
		contentScript: path.resolve('./src/contentScripts/contentScript.ts'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false,
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve('src/static'),
					to: path.resolve('dist'),
				},
			],
		}),
		new HtmlPlugin({
			title: 'AliBill',
			filename: 'invoice.html',
			chunks: ['invoice'],
		}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve('dist'),
	},
	optimization: {
		splitChunks: {
			chunks(chunk) {
				return chunk.name !== 'contentScript' && chunk.name !== 'background';
			},
		},
	},
};
