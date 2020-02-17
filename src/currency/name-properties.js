define([
	"./unit-patterns",
	"../util/object/filter"
], function( currencyUnitPatterns, objectFilter ) {

/**
 * nameProperties( currency, cldr )
 *
 * Return number pattern with the appropriate currency code in as literal.
 */
return function( currency, cldr ) {
	return {
		displayNames: objectFilter( cldr.main([
			"numbers/currencies",
			currency
		]), /^displayName/ ),
		unitPatterns: currencyUnitPatterns( cldr )
	};
};

});
