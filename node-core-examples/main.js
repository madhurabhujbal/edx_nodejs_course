var fs = require('fs');

let filename = process.argv[2];
let inputData = fs.readFileSync(filename, 'utf-8');
let splitWords = inputData.split('|');

let result = '';
for ( i=0; i<splitWords.length-1; i++) {
    let currentWord = splitWords[i];
    var changedWord = currentWord[0].toUpperCase() + currentWord.slice(1);
    result = result + changedWord + '|';
}
result = result.slice(0, result.length - 1);
let outputFile = filename.split('.')[0] + '.out';
fs.writeFileSync(outputFile, result);
