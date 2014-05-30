define([
	"../util/array/map",
	"../util/object/values",
	"../var/string/dates-calendars-gregorian"
], function( arrayMap, objectValues, datesCalendarsGregorian ) {

/**
 * allPreset()
 *
 * @cldr [Cldr instance].
 *
 * Return an Array with all (skeleton, date, time, datetime) presets.
 */
return function( cldr ) {
	var result = [];

	// Skeleton
	result = objectValues( cldr.main( datesCalendarsGregorian + "dateTimeFormats/availableFormats" ) );

	// Time
	result = result.concat( objectValues( cldr.main( datesCalendarsGregorian + "timeFormats" ) ) );

	// Date
	result = result.concat( objectValues( cldr.main( datesCalendarsGregorian + "dateFormats" ) ) );

	// Datetime
	result = result.concat( arrayMap( objectValues( cldr.main( datesCalendarsGregorian + "dateTimeFormats" ) ), function( datetimeFormat, key ) {
		if ( typeof datetimeFormat !== "string" ) {
			return datetimeFormat;
		}
		return datetimeFormat
			.replace( /\{0\}/, cldr.main([
				datesCalendarsGregorian + "timeFormats",
				key
			]))
			.replace( /\{1\}/, cldr.main([
				datesCalendarsGregorian + "dateFormats",
				key
			]));
	}));

	return arrayMap( result, function( pattern ) {
		return { pattern: pattern };
	});
};

});
