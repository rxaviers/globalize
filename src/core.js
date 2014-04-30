define([
	"cldr"
], function( Cldr ) {

var cldr, defaultCldr,
	cachedCldrs = {};

/**
 * [new] Globalize( locale )
 *
 * @locale [String]
 *
 * @cldr [Cldr instance]
 *
 * Create a Globalize instance.
 */
function Globalize( locale ) {
	if ( !( this instanceof Globalize ) ) {
		return new Globalize( locale );
	}

	if ( !locale ) {
		throw new Error( "Missing locale" );
	}

	this.cldr = cldr( locale );
}

/**
 * [private] Globalize._cldr( locale|cldr )
 *
 * @locale [String]
 *
 * @cldr [Cldr instance]
 *
 * Return cldr or cached Cldr instance giving locale.
 */
Globalize._cldr = cldr = function( locale ) {
	if ( locale instanceof Cldr ) {
		return locale;
	}

	if ( !cachedCldrs[ locale ] ) {
		cachedCldrs[ locale ] = new Cldr( locale );
	}

	return cachedCldrs[ locale ];
};

/**
 * Globalize.load( json )
 *
 * @json [JSON]
 *
 * Load resolved or unresolved cldr data.
 * Somewhat equivalent to previous Globalize.addCultureInfo(...).
 */
Globalize.load = function( json ) {
	Cldr.load( json );
};

/**
 * Globalize.locale( [locale|cldr] )
 *
 * @locale [String]
 *
 * @cldr [Cldr instance]
 *
 * Set default Cldr instance if locale or cldr argument is passed.
 *
 * Return the default Cldr instance.
 */
Globalize.locale = function( locale ) {
	if ( arguments.length ) {
		defaultCldr = cldr( locale );
	}
	return defaultCldr;
};

return Globalize;

});
