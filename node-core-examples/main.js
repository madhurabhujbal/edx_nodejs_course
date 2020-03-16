var fs = require('fs');

let inputData = fs.readFileSync('mini-input.dat', 'utf-8');
//console.log(file);
let splitWords = inputData.split('|');
//console.log(splitWords);

for ( i=0; i<splitWords.length-1; i++) {
    let currentWord = splitWords[i];
    //console.log(firstWord);
    let changedWord = currentWord[0].toUpperCase() + currentWord.slice(1);
    console.log(changedWord);
}
