/* global describe:true */
/* global it:true */

'use strict';

var assert = require('assert');
var exec = require('child_process').exec;
var path = require('path');

describe('tla bin', function(){
	var cmd = 'node '+path.join(__dirname, '../bin/tla')+' ';
	console.log(cmd);

	it('--help should run without errors', function(done) {
		exec(cmd+'--help', function (error) {
			assert(!error);
			done();
		});
	});

	it('--version should run without errors', function(done) {
		exec(cmd+'--version', function (error) {
			assert(!error);
			done();
		});
	});

	it('should return error on missing command', function(done) {
    this.timeout(4000);

		exec(cmd, function (error) {
			assert(error);
			assert.equal(error.code,1);
			done();
		});

	});

	it('should return error on unknown command', function(done) {
    this.timeout(4000);

		exec(cmd+'junkcmd', function (error) {
			assert(error);
			assert.equal(error.code,1);
			done();
		});
	});

});

var expansions = require('../lib/expansions');

describe('tla expansions', function(){

	it('should be an array', function() {
			assert(Array.isArray(expansions));
	});

	it('should have at least 50 expansions', function() {
			assert(expansions.length > 50);
	});

});

//var tla = require('../lib/tla');

describe('tla lib', function(){

});
