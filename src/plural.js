define([
	"./core",
	"./plural/form",
	"./message"
], function( Globalize, pluralForm ) {

/**
 * Globalize.formatPlural( value, data )
 *
 * @value [Number]
 *
 * @data [JSON]
 *
 * FIXME
 *
 * Return the appropriate message based on value's plural group: zero | one | two | few | many | other.
 */
Globalize.formatPlural =
Globalize.prototype.formatPlural =
function( value, data ) {
	var form;

	if ( typeof value !== "number" ) {
		throw new Error( "Value is not a number" );
	}

	if ( !( form = pluralForm( value, this.cldr ) ) ) {
		throw new Error( "Plural form not found!" );
	}

	return data[ form ];
};

return Globalize;

});
