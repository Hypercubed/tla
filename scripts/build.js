// from https://github.com/npm/npm-expansions/blob/master/build.js
// ISC License (ISC)

var fs       = require("fs")
var infile   = __dirname + '/../lib/expansions.txt'
var outfile_pre  = __dirname + '/../lib/expansions'
var outfile_json = outfile_pre + '.json'
var outfile_txt = outfile_pre + '.txt'

var list = fs
  .readFileSync(infile, 'utf8')
  .split("\n")
  .map(function(e) { return e.trim().toLowerCase(); })
  .filter(function(e) { return (e.length > 0) })
  .filter(function(e) { return e.charAt(0) === "t" })
  .sort(function (a, b) {
    return a.localeCompare(b);
  });

fs.writeFileSync(outfile_json, JSON.stringify(list, null, 2));

fs.writeFileSync(outfile_txt, list.reduce(
  function(p, c){
    return p + c + '\n'
  }, list.shift() + '\n')
);

// reappend the instructions
fs.appendFileSync(
  outfile_txt,
  "#\n" +
  "# please don't add your expansions down here!\n" +
  "# insert them in alphabetical order to help reduce merge conflicts.\n" +
  "#\n" +
  "# <3\n"
)
