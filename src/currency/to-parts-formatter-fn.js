define([
	"../common/validate/parameter-presence",
	"../common/validate/parameter-type/number",
	"./name-format",
	"./symbol-format"
], function( validateParameterPresence, validateParameterTypeNumber, currencyNameFormat,
	currencySymbolFormat ) {

return function( numberToPartsFormatter, pluralGenerator, properties ) {
	var fn;

	// Return formatter when style is "code" or "name".
	if ( pluralGenerator && properties ) {
		fn = function currencyFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );
			return currencyNameFormat(
				numberToPartsFormatter( value ),
				pluralGenerator( value ),
				properties
			);
		};

	// Return formatter when style is "symbol" or "accounting".
	} else {
		fn = function currencyFormatter( value ) {

			// 1: Reusing pluralGenerator argument, but in this case it is actually `symbol`
			return currencySymbolFormat( numberToPartsFormatter( value ), pluralGenerator /* 1 */ );
		};
	}

	return fn;
};

});
