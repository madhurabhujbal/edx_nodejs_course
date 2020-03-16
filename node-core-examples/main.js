var fs = require('fs');

var inputData = fs.readFileSync('mini-input.dat', 'utf-8');
//console.log(file);
var splitWords = inputData.split('|');
//console.log(splitWords);

var firstWord = splitWords[0];
//console.log(firstWord);
splitfw = firstWord[0].toUpperCase() + firstWord.slice(1);
console.log(splitfw);

