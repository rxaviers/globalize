define([
	"cldr",
	"./core",
	"./util/always-array"
], function( Cldr, Globalize, alwaysArray ) {

/**
 * .formatMessage( message, data )
 *
 * @message [Sring]
 *
 * @data [Array or JSON]
 *
 * Format message FIXME.
 */
Globalize.formatMessage = function( message, data ) {
	// Replace {attribute}'s
	message = message.replace( /{[0-9a-zA-Z-_. ]+}/g, function( name ) {
		name = name.replace( /^{([^}]*)}$/, "$1" );
		return data[ name ];
	});
	return message;
};

/**
 * .loadTranslations( json )
 *
 * @json [JSON]
 *
 * Load translation data.
 */
Globalize.loadTranslations = function( json ) {
	var customData = {
		"globalize-translations": json
	};
	Cldr.load( customData );
};

/**
 * .translate( path )
 *
 * @path [String or Array]
 *
 * Translate item given its path.
 */
Globalize.translate =
Globalize.prototype.translate = function( path ) {
	path = alwaysArray( path, messageData );
	return this.formatMessage(
		this.cldr.get( [ "globalize-translations/{languageId}" ].concat( path ) ),
		messageData
	);
};

return Globalize;

});
