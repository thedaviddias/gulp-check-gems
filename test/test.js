/*global describe:false, it:false */
'use strict';

var gulpCheckGems = require('../');

var should = require('should');

describe('gulp-check-gems', function() {

	describe('smoke test,', function() {

		it('Should error if no parameters passed', function(done) {

			var caughtErr;

			try {
				gulpCheckGems();
			} catch (err) {
				caughtErr = err;
			}

			should.exist(caughtErr);
			caughtErr.message.indexOf('specify').should.be.above(-1);
			done();
		});

	});
});
