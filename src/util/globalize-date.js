define( function() {

var GlobalizeDate = function( date, timeZoneData ) {
	this.original = new Date( date.getTime() );
	this.local = new Date( date.getTime() );
	this.isGloblizeDate = true;
	this.timeZoneData = timeZoneData;
	this.setTime( this.local.getTime() - this.getTimeZoneAdjustment() * 60 * 1000 );
};

GlobalizeDate.prototype.setWrap = function( fn ) {
	var offset1 = this.getTimeZoneAdjustment();
	var ret = fn();
	this.original = new Date( this.getTime() );
	var offset2 = this.getTimeZoneAdjustment();
	this.original.setMinutes( this.original.getMinutes() + offset2 - offset1 );
	return ret;
};

GlobalizeDate.prototype.clone = function() {
	return new GlobalizeDate( this.original, this.timeZoneData );
};

GlobalizeDate.prototype.getFullYear = function() {
	return this.local.getUTCFullYear();
};

GlobalizeDate.prototype.getMonth = function() {
	return this.local.getUTCMonth();
};

GlobalizeDate.prototype.getDate = function() {
	return this.local.getUTCDate();
};

GlobalizeDate.prototype.getDay = function() {
	return this.local.getUTCDay();
};

GlobalizeDate.prototype.getHours = function() {
	return this.local.getUTCHours();
};

GlobalizeDate.prototype.getMinutes = function() {
	return this.local.getUTCMinutes();
};

GlobalizeDate.prototype.getSeconds = function() {
	return this.local.getUTCSeconds();
};

GlobalizeDate.prototype.getMilliseconds = function() {
	return this.local.getUTCMilliseconds();
};

GlobalizeDate.prototype.getTime = function() {
	return this.local.getTime() + this.getTimeZoneAdjustment() * 60 * 1000;
};

GlobalizeDate.prototype.getTimezoneOffset = function() {
	return this.getTimeZoneAdjustment();
};

GlobalizeDate.prototype.setFullYear = function( year ) {
	var local = this.local;
	return this.setWrap(function() {
		return local.setUTCFullYear( year );
	});
};

GlobalizeDate.prototype.setMonth = function( month ) {
	var local = this.local;
	return this.setWrap(function() {
		return local.setUTCMonth( month );
	});
};

GlobalizeDate.prototype.setDate = function( date ) {
	var local = this.local;
	return this.setWrap(function() {
		return local.setUTCDate( date );
	});
};

GlobalizeDate.prototype.setHours = function( hour ) {
	var local = this.local;
	return this.setWrap(function() {
		return local.setUTCHours( hour );
	});
};

GlobalizeDate.prototype.setMinutes = function( minutes ) {
	var local = this.local;
	return this.setWrap(function() {
		return local.setUTCMinutes( minutes );
	});
};

GlobalizeDate.prototype.setSeconds = function( seconds ) {
	var local = this.local;

	// setWrap is needed here just because abs(seconds) could be >= a minute.
	return this.setWrap(function() {
		return local.setUTCSeconds( seconds );
	});
};

GlobalizeDate.prototype.setMilliseconds = function( milliseconds ) {
	var local = this.local;

	// setWrap is needed here just because abs(seconds) could be >= a minute.
	return this.setWrap(function() {
		return local.setUTCMilliseconds( milliseconds );
	});
};

GlobalizeDate.prototype.setTime = function( time ) {
	return this.local.setTime( time );
};

GlobalizeDate.prototype.isDST = function() {
	return this.getStdOffset() !== -this.getTimeZoneAdjustment();
};

GlobalizeDate.prototype.getStdOffset = function() {
	var offsetsLength = this.timeZoneData.offsets.length,
		stdOffset = -1;
	if ( offsetsLength > 1 ) {
		stdOffset *= Math.max(
			this.timeZoneData.offsets[ offsetsLength - 1 ],
			this.timeZoneData.offsets[ offsetsLength - 2 ]
		);
	} else {
		stdOffset *= this.timeZoneData.offsets[ this.timeZoneData.offsets.length - 1 ];
	}
	return stdOffset;
};

GlobalizeDate.prototype.getTimeZoneAdjustment = function() {
	var index = 0;

	// TODO Should we do binary search for improved performance?
	while ( index < this.timeZoneData.untils.length - 1 &&
				this.original.getTime() >= this.timeZoneData.untils[ index ] ) {
		index++;
	}
	return index === 0 ? 0 : this.timeZoneData.offsets[ index ];
};

return GlobalizeDate;

});
