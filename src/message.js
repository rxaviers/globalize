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
 * @data [Various] If an Array or a JSON object, {...} will be replaced with corresponding keys. If it's of another type, {0} will be replaced with such.
 *
 * Format message FIXME.
 */
Globalize.formatMessage = function( message, data ) {

	// Data must be an Array or a JSON object. Any other data type will be converted to [ data ].
	data = typeof data === "object" ? data : [ data ];

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
Globalize.prototype.translate = function( path, messageData ) {
	path = alwaysArray( path );
	return this.formatMessage(
		this.cldr.get( [ "globalize-translations/{languageId}" ].concat( path ) ),
		messageData
	);
};

return Globalize;

});
