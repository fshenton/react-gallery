const path = require("path");

const dist = path.resolve(__dirname, "dist");
const src = path.resolve(__dirname, "src");

function buildConfig(env, args){
	const { mode } = args;

	let modeOptions;
	switch(mode){
		case "development":
			modeOptions = {
				mode: "development",
				output: {
					filename: "bundle.js",
					path: dist, 
					publicPath: "/"
				},
				devServer: {
					contentBase: dist
				}
			}
			break;
		case "production":
		default:
			modeOptions = {
				mode:"production",
				output: {
					filename: "bundle.js",
					path: dist,
					publicPath: "./"
				}
			}
			break;
	}

	const config = {
		entry: `${src}/index.jsx`,
		...modeOptions,
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						{
							loader: "css-loader",
							options: {
								modules: {
									localIdentName: "[folder]__[local]"
								}
							}
						}, {
							loader: "sass-loader"
						}, {
							loader: "style-loader"
						}
					]
				}, {
					test: /\.jsx$/,
					use: [
						{
							loader: "babel-loader",
							options: {
								presets: [
									"@babel/preset-react"
								]
							}
						}
					]
				}
			]
		}
	};

	return config;
}

module.exports = buildConfig;

