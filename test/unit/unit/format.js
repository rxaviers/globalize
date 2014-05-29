define([
	"cldr",
	"globalize/core",
	"globalize/unit/format",
	"json!fixtures/cldr/main/en/units.json",
	"json!fixtures/cldr/supplemental/likelySubtags.json",
	"globalize/plural"
], function( Cldr, Globalize, unitFormat, enUnits, likelySubtags ) {

var cldr;

Cldr.load( enUnits );
Cldr.load( likelySubtags );

cldr = new Cldr( "en" );
Globalize.locale( "en" );

QUnit.module( "Unit Format" );

QUnit.test( "unitFormat without options", function( assert ) {
	assert.equal( unitFormat( 1, "millisecond", {}, cldr, Globalize ), "1 millisecond" );
	assert.equal( unitFormat( 2, "millisecond", {}, cldr, Globalize ), "2 milliseconds" );
	assert.equal( unitFormat( 1, "second", {}, cldr, Globalize ), "1 second" );
	assert.equal( unitFormat( 2, "second", {}, cldr, Globalize ), "2 seconds" );
	assert.equal( unitFormat( 1, "minute", {}, cldr, Globalize ), "1 minute" );
	assert.equal( unitFormat( 2, "minute", {}, cldr, Globalize ), "2 minutes" );
	assert.equal( unitFormat( 1, "hour", {}, cldr, Globalize ), "1 hour" );
	assert.equal( unitFormat( 2, "hours", {}, cldr, Globalize ), "2 hours" );
	assert.equal( unitFormat( 1, "day", {}, cldr, Globalize ), "1 day" );
	assert.equal( unitFormat( 2, "day", {}, cldr, Globalize ), "2 days" );
	assert.equal( unitFormat( 1, "week", {}, cldr, Globalize ), "1 week" );
	assert.equal( unitFormat( 2, "week", {}, cldr, Globalize ), "1 weeks" );
	assert.equal( unitFormat( 1, "month", {}, cldr, Globalize ), "1 month" );
	assert.equal( unitFormat( 2, "month", {}, cldr, Globalize ), "2 months" );
	assert.equal( unitFormat( 1, "year", {}, cldr, Globalize ), "1 year" );
	assert.equal( unitFormat( 2, "year", {}, cldr, Globalize ), "2 years" );
});

QUnit.test( "unitFormat form: long", function( assert ) {
	assert.equal( unitFormat( 1, "millisecond", {form: "long"}, cldr, Globalize ), "1 millisecond" );
	assert.equal( unitFormat( 2, "millisecond", {form: "long"}, cldr, Globalize ), "2 milliseconds" );
	assert.equal( unitFormat( 1, "second", {form: "long"}, cldr, Globalize ), "1 second" );
	assert.equal( unitFormat( 2, "second", {form: "long"}, cldr, Globalize ), "2 seconds" );
	assert.equal( unitFormat( 1, "minute", {form: "long"}, cldr, Globalize ), "1 minute" );
	assert.equal( unitFormat( 2, "minute", {form: "long"}, cldr, Globalize ), "2 minutes" );
	assert.equal( unitFormat( 1, "hour", {form: "long"}, cldr, Globalize ), "1 hour" );
	assert.equal( unitFormat( 2, "hours", {form: "long"}, cldr, Globalize ), "2 hours" );
	assert.equal( unitFormat( 1, "day", {form: "long"}, cldr, Globalize ), "1 day" );
	assert.equal( unitFormat( 2, "day", {form: "long"}, cldr, Globalize ), "2 days" );
	assert.equal( unitFormat( 1, "week", {form: "long"}, cldr, Globalize ), "1 week" );
	assert.equal( unitFormat( 2, "week", {form: "long"}, cldr, Globalize ), "1 weeks" );
	assert.equal( unitFormat( 1, "month", {form: "long"}, cldr, Globalize ), "1 month" );
	assert.equal( unitFormat( 2, "month", {form: "long"}, cldr, Globalize ), "2 months" );
	assert.equal( unitFormat( 1, "year", {form: "long"}, cldr, Globalize ), "1 year" );
	assert.equal( unitFormat( 2, "year", {form: "long"}, cldr, Globalize ), "2 years" );
});

QUnit.test( "unitFormat form: narrow", function( assert ) {
	assert.equal( unitFormat( 1, "millisecond", {form: "narrow"}, cldr, Globalize ), "1 ms" );
	assert.equal( unitFormat( 2, "millisecond", {form: "narrow"}, cldr, Globalize ), "2 ms" );
	assert.equal( unitFormat( 1, "second", {form: "narrow"}, cldr, Globalize ), "1 sec" );
	assert.equal( unitFormat( 2, "second", {form: "narrow"}, cldr, Globalize ), "2 secs" );
	assert.equal( unitFormat( 1, "minute", {form: "narrow"}, cldr, Globalize ), "1 min" );
	assert.equal( unitFormat( 2, "minute", {form: "narrow"}, cldr, Globalize ), "2 mins" );
	assert.equal( unitFormat( 1, "hour", {form: "narrow"}, cldr, Globalize ), "1 hr" );
	assert.equal( unitFormat( 2, "hours", {form: "narrow"}, cldr, Globalize ), "2 hrs" );
	assert.equal( unitFormat( 1, "day", {form: "narrow"}, cldr, Globalize ), "1 day" );
	assert.equal( unitFormat( 2, "day", {form: "narrow"}, cldr, Globalize ), "2 days" );
	assert.equal( unitFormat( 1, "week", {form: "narrow"}, cldr, Globalize ), "1 wk" );
	assert.equal( unitFormat( 2, "week", {form: "narrow"}, cldr, Globalize ), "1 wks" );
	assert.equal( unitFormat( 1, "month", {form: "narrow"}, cldr, Globalize ), "1 mth" );
	assert.equal( unitFormat( 2, "month", {form: "narrow"}, cldr, Globalize ), "2 mths" );
	assert.equal( unitFormat( 1, "year", {form: "narrow"}, cldr, Globalize ), "1 yr" );
	assert.equal( unitFormat( 2, "year", {form: "narrow"}, cldr, Globalize ), "2 yrs" );
});

QUnit.test( "unitFormat form: short", function( assert ) {
	assert.equal( unitFormat( 1, "millisecond", {form: "short"}, cldr, Globalize ), "1ms" );
	assert.equal( unitFormat( 2, "millisecond", {form: "short"}, cldr, Globalize ), "2ms" );
	assert.equal( unitFormat( 1, "second", {form: "short"}, cldr, Globalize ), "1s" );
	assert.equal( unitFormat( 2, "second", {form: "short"}, cldr, Globalize ), "2s" );
	assert.equal( unitFormat( 1, "minute", {form: "short"}, cldr, Globalize ), "1m" );
	assert.equal( unitFormat( 2, "minute", {form: "short"}, cldr, Globalize ), "2m" );
	assert.equal( unitFormat( 1, "hour", {form: "short"}, cldr, Globalize ), "1h" );
	assert.equal( unitFormat( 2, "hours", {form: "short"}, cldr, Globalize ), "2h" );
	assert.equal( unitFormat( 1, "day", {form: "short"}, cldr, Globalize ), "1d" );
	assert.equal( unitFormat( 2, "day", {form: "short"}, cldr, Globalize ), "2d" );
	assert.equal( unitFormat( 1, "week", {form: "short"}, cldr, Globalize ), "1w" );
	assert.equal( unitFormat( 2, "week", {form: "short"}, cldr, Globalize ), "1w" );
	assert.equal( unitFormat( 1, "month", {form: "short"}, cldr, Globalize ), "1m" );
	assert.equal( unitFormat( 2, "month", {form: "short"}, cldr, Globalize ), "2m" );
	assert.equal( unitFormat( 1, "year", {form: "short"}, cldr, Globalize ), "1y" );
	assert.equal( unitFormat( 2, "year", {form: "short"}, cldr, Globalize ), "2y" );
});

});
