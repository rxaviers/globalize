define([
	"cldr",
	"./common/get-cldr",
	"./core",
	"./util/always-array"
], function( Cldr, commonGetCldr, Globalize, alwaysArray ) {

var translate;

/**
 * Globalize.loadMessages( locale, json )
 *
 * @locale [String]
 *
 * @json [JSON]
 *
 * Load messages (translation) data per locale.
 */
Globalize.loadMessages = function( locale, json ) {
	var cldr = new Cldr( locale ),
		customData = {
			"globalize-messages": {}
		};
	customData[ "globalize-messages" ][ cldr.attributes.languageId ] = json;
	Cldr.load( customData );
};

/**
 * Globalize.translate( path, locale ), or
 * globalize.translate( path )
 *
 * @path [String or Array]
 *
 * @locale [String]
 *
 * Translate item given its path.
 */
Globalize.translate = translate = function( path , locale ) {
	var cldr = commonGetCldr( locale );
	path = alwaysArray( path );
	return cldr.get( [ "globalize-messages/{languageId}" ].concat( path ) );
};

Globalize.prototype.translate = function( path ) {
	return translate( path, this.cldr );
};

return Globalize;

});
