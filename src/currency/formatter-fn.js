define(function() {

return function( currencyToPartsFormatter ) {
	return function currencyFormatter( value ) {
		return currencyToPartsFormatter( value ).map( function( part ) {
			return part.value;
		}).join( "" );
	};
};

});
