'use strict';

var expansions = require('./expansions.json');

exports.randomLine = function randomLine() {
  return expansions[Math.floor(Math.random() * expansions.length)];
};

exports.randomLines = ArrayMap.bind(exports.randomLine);

exports.randomSet = function randomSet() {
	var n = exports.randomLines(3).map(splitLine);
	var t = n[0][0];
	var l = n[1][1];
	var a = n[2][2];
  return [t,l,a].join(' ');
};

exports.randomSets = ArrayMap.bind(exports.randomSet);

// utils

function ArrayMap(N) {
	return Array.apply(null, Array(N)).map(this);
}

function splitLine(d) {
	return d.split(' ');
}
