

// Invert key and values, e.g., {"e": "eEc"} ==> {"e": "e", "E": "e", "c": "e"}.
var dateExpandPatternSimilarFieldsMap = objectInvert({
	"e": "eEc",
	"L": "ML"
}, function( object, key, value ) {
	value.split( "" ).forEach(function( field ) {
		object[ field ] = key;
	});
	return object;
});

