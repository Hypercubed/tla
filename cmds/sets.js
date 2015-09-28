var tla = require("../lib/tla");

module.exports = function(program) {
	'use strict';

	program
		.command('sets [N]')
		.version('0.0.0')
		.description('Return N random acronym')
		.action(function(N){
			N = parseInt(N) || 1;
			tla.randomSets(N).map(function(d) { console.log(d); });
		});

};
