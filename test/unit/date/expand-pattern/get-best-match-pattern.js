define([
	"cldr",
	"src/date/expand-pattern/get-best-match-pattern",
	"json!cldr-data/main/en/ca-gregorian.json",
	"json!cldr-data/supplemental/likelySubtags.json",

	"cldr/event",
	"cldr/supplemental"
], function( Cldr, getBestMatchPattern, enCaGregorian, likelySubtags ) {

var en;

Cldr.load( enCaGregorian, likelySubtags );

en = new Cldr( "en" );

QUnit.module( "Date Expand Pattern Get Best Match Pattern" );

QUnit.test( "should get best match pattern", function( assert ) {
	assert.equal( getBestMatchPattern( en, "MMMM" ), "LLLL" );
	assert.equal( getBestMatchPattern( en, "MMMMd" ), "MMMM d" );

	assert.equal( getBestMatchPattern( en, "EEE" ), "ccc" );
	assert.equal( getBestMatchPattern( en, "EEEE" ), "cccc" );
	assert.equal( getBestMatchPattern( en, "EEEd" ), "d EEE" );
	assert.equal( getBestMatchPattern( en, "EEEEd" ), "d EEEE" );

	assert.equal( getBestMatchPattern( en, "ccc" ), "ccc" );
	assert.equal( getBestMatchPattern( en, "cccc" ), "cccc" );
	assert.equal( getBestMatchPattern( en, "cccd" ), "d EEE" );
	assert.equal( getBestMatchPattern( en, "ccccd" ), "d EEEE" );
});

});
