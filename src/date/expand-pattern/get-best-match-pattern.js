define([
	"./augment-format",
	"./compare-formats"
], function( dateExpandPatternAugmentFormat, dateExpandPatternCompareFormats ) {

return function( cldr, skeleton ) {
	var availableFormats, format, pattern, ratedFormats,
		path = "dates/calendars/gregorian/dateTimeFormats/availableFormats",

		// Using easier to read variables.
		augmentFormat = dateExpandPatternAugmentFormat,
		compareFormats = dateExpandPatternCompareFormats;

	pattern = cldr.main([ path, skeleton ]);

	if ( skeleton && !pattern ) {
		availableFormats = cldr.main([ path ]);
		ratedFormats = [];

		for ( format in availableFormats ) {
			ratedFormats.push({
				format: format,
				pattern: availableFormats[format],
				rate: compareFormats( skeleton, format )
			});
		}

		ratedFormats = ratedFormats
			.filter( function( format ) {
				return format.rate > -1;
			} )
			.sort( function( formatA, formatB ) {
				return formatA.rate - formatB.rate;
			});

		if ( ratedFormats.length ) {
			pattern = augmentFormat( skeleton, ratedFormats[0].pattern );
		}
	}

	return pattern;
};

});
