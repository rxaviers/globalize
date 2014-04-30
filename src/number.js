define([
	"./common/get-cldr",
	"./core",
	"./number/format",
	"./number/pattern"
], function( commonGetCldr, Globalize, numberFormat, numberPattern ) {

var formatNumber, parseNumber;

/**
 * Globalize.formatNumber( value, pattern, locale ), or
 * globalize.formatNumber( value, pattern )
 *
 * @value [Number]
 *
 * @attributes [Object]:
 * - style: [String] "decimal" (default) or "percent".
 * - see also number/format options.
 *
 * @locale [String]
 *
 * Format a number according to the given attributes and the given locale (or the default locale if not specified).
 */
Globalize.formatNumber = formatNumber = function( value, attributes, locale ) {
	var pattern;

	if ( typeof value !== "number" ) {
		throw new Error( "Value is not a number" );
	}

	attributes = attributes || {};
	locale = commonGetCldr( locale );

	if ( !attributes.pattern ) {
		pattern = numberPattern( attributes.style || "decimal", locale );
	}

	return numberFormat( value, pattern, locale, attributes );
};

Globalize.prototype.formatNumber = function( value, attributes ) {
	return formatNumber( value, attributes, this.cldr );
};

/**
 * Globalize.parseNumber( value, patterns, locale ), or
 * globalize.parseNumber( value, patterns )
 *
 * @value [String]
 *
 * @patterns [TBD]
 *
 * @locale [String]
 *
 * Return a Number or null.
 */
Globalize.parseNumber = parseNumber = function( /*value, patterns, locale*/ ) {
	return null;
};

Globalize.prototype.parseNumber = function( value, patterns ) {
	return parseNumber( value, patterns, this.cldr );
};

return Globalize;

});
