define([
	"cldr",
	"./common/get-cldr",
	"./core",
	"./date/all-presets",
	"./date/expand-pattern",
	"./date/format",
	"./date/parse",
	"./util/always-array",
	"./util/array/some",
	"cldr/supplemental"
], function( Cldr, commonGetCldr, Globalize, dateAllPresets, dateExpandPattern, dateFormat, dateParse, alwaysArray, arraySome ) {

var formatDate, parseDate;

/**
 * Globalize.formatDate( value, pattern, locale ), or
 * globalize.formatDate( value, pattern )
 *
 * @value [Date]
 *
 * @pattern [String or Object] see date/expand_pattern for more info.
 *
 * @locale [String]
 *
 * Formats a date or number according to the given pattern string and the given locale (or the default locale if not specified).
 */
Globalize.formatDate = formatDate = function( value, pattern, locale ) {
	var cldr;

	if ( !( value instanceof Date ) ) {
		throw new Error( "Value is not date" );
	}

	if ( !pattern ) {
		throw new Error( "Missing pattern" );
	}

	cldr = commonGetCldr( locale );
	pattern = dateExpandPattern( pattern, cldr );
	return dateFormat( value, pattern, cldr );
};

Globalize.prototype.formatDate = function( value, pattern ) {
	return formatDate( value, pattern, this.cldr );
};

/**
 * Globalize.parseDate( value, patterns, locale ), or
 * globalize.parseDate( value, patterns )
 *
 * @value [String]
 *
 * @patterns [Array] Optional. See date/expand_pattern for more info about each pattern. Defaults to the list of all presets defined in the locale (see date/all_presets for more info).
 *
 * @locale [String]
 *
 * Return a Date instance or null.
 */
Globalize.parseDate = parseDate = function( value, patterns, locale ) {
	var date,
		cldr = commonGetCldr( locale );

	if ( typeof value !== "string" ) {
		throw new Error( "invalid value (" + value + "), string expected" );
	}

	if ( !patterns ) {
		patterns = dateAllPresets( cldr );
	} else {
		patterns = alwaysArray( patterns );
	}

	arraySome( patterns, function( pattern ) {
		pattern = dateExpandPattern( pattern, cldr );
		date = dateParse( value, pattern, cldr );
		return !!date;
	});

	return date || null;
};

Globalize.prototype.parseDate = function( value, patterns ) {
	return parseDate( value, patterns, this.cldr );
};

return Globalize;

});
