define([
	"./normalize-pattern-type",
	"../pattern-re"
], function( dateExpandPatternNormalizePatternType, datePatternRe ) {

return function( formatA, formatB ) {
	var distance, typeA, typeB, matchFound, i, j,

		// Using easier to read variables.
		normalizePatternType = dateExpandPatternNormalizePatternType;

	if ( formatA === formatB ) {
		return 0;
	}

	formatA = formatA.match( datePatternRe );
	formatB = formatB.match( datePatternRe );
	if ( formatA.length === formatB.length ) {
		distance = 1;
		for ( i = 0; i < formatA.length; i++ ) {
			typeA = normalizePatternType( formatA[i].charAt( 0 ) );
			typeB = null;
			matchFound = false;
			for ( j = 0; j < formatB.length; j++ ) {
				typeB = normalizePatternType( formatB[j].charAt( 0 ) );
				if ( typeA === typeB ) {
					break;
				} else {
					typeB = null;
				}
			}
			if ( typeB === null ) {
				return -1;
			}
			distance = distance + Math.abs( formatA[i].length - formatB[j].length );
			if ( formatA[i].charAt( 0 ) !== formatB[j].charAt( 0 ) ) {
				distance = distance + 1;
			}
		}
		return distance;
	}
	return -1;
};

});
