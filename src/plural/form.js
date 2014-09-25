define([
	"makeplural"
], function( makeplural ) {

/**
 * pluralForm( value, cldr )
 *
 * @value [Number]
 *
 * @cldr [Cldr instance].
 *
 * Return the corresponding form (zero | one | two | few | many | other) of a
 * value given locale @cldr.
 */
return function( value, cldr ) {
	Plurals.rules = {
		cardinal: cldr.supplemental( "plurals-type-cardinal" )
	};
	return Plurals.build(cldr.attributes.languageId, { "return_function": 1 })(value);
};

});
