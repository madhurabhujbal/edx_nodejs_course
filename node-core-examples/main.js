var fs = require('fs');

var file = fs.readFileSync('mini-input.dat', 'utf-8');
//console.log(file);
var splitWords = file.split('|');
console.log(splitWords);
//var sortedFile = fs.writeFileSync('sortedfile.dat', 'sort');

