var webpack = require( "webpack" );
var path = require("path");
var HtmlWebpackPlugin = require( "html-webpack-plugin" );
var GlobalizePlugin = require( "globalize-webpack-plugin" );

var production = process.env.NODE_ENV === "production";
var globalizeCompiledDataRegex = new RegExp( /^(globalize\-compiled\-data)\-\S+$/ );

function subLocaleNames( name ) {
	return name.replace( globalizeCompiledDataRegex, "$1" );
}

module.exports = {
	entry: {
		main: "./app/index.js",
	},
	mode: production ? "production" : "development",
	output: {
		path: path.join( __dirname, production ? "./dist" : "./tmp" ),
		publicPath: production ? "" : "http://localhost:8080/",
		chunkFilename: "[name].[chunkhash].js",
		filename: production ? "[name].[chunkhash].js" : "app.js"
	},
	resolve: {
		extensions: [ "*", ".js" ]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				// Force vendors chunk (in this demo it would be small and automatically bundled in main)
				vendors: {
					name: "vendors",
					minSize: 1,
					test: /[\\/]node_modules[\\/]/,
					chunks: "all"
				}
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index-template.html",
			// filter to a single compiled globalize language
			// change 'en' to language of choice or remove inject all languages
			// NOTE: last language will be set language
			chunks: [ "vendors", "globalize-compiled-data-en", "main" ],
			chunksSortMode: function ( c1, c2 ) {
				var orderedChunks = [ "vendors", "globalize-compiled-data", "main" ];
				var o1 = orderedChunks.indexOf( subLocaleNames( c1.names[ 0 ]));
				var o2 = orderedChunks.indexOf( subLocaleNames( c2.names[ 0 ]));
				return o1 - o2;
			},
		}),
		new GlobalizePlugin({
			production: production,
			developmentLocale: "en",
			supportedLocales: [ "ar", "de", "en", "es", "pt", "ru", "zh" ],
			messages: "messages/[locale].json",
			output: "i18n/[locale].[chunkhash].js"
		})
	]
};
