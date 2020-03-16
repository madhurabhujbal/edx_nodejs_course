var fs = require('fs');

let inputData = fs.readFileSync('mini-input.dat', 'utf-8');
let splitWords = inputData.split('|');

let result = '';
for ( i=0; i<splitWords.length-1; i++) {
    let currentWord = splitWords[i];
    var changedWord = currentWord[0].toUpperCase() + currentWord.slice(1);
    result = result + changedWord + '|';
}
result = result.slice( 0, result.length - 1 );
console.log(result);
