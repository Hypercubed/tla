var tla = require("../lib/tla");

module.exports = function(program) {
	'use strict';

	program
		.command('lines [N]')
		.version('0.0.0')
		.description('Return N random acronym lines')
		.action(function(N){
			N = parseInt(N) || 1;
			tla.randomLines(N).map(function(d) { console.log(d); });
		});

};
