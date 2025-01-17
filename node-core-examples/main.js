var fs = require('fs');

//Check if filename is entered by user
if (process.argv.length < 3){
    console.log('Please provide filename to process');
    return 1;
}

//Check if correct file exists in the current directory
let filename = process.argv[2];
if (!fs.existsSync(filename)){
    console.log('File ' + filename + ' does not exist');
    return 2;
}
let inputData = fs.readFileSync(filename, 'utf-8');
let splitWords = inputData.split('|');

let result = '';
for ( i=0; i<splitWords.length-1; i++) {
    let currentWord = splitWords[i];
    var changedWord = currentWord[0].toUpperCase() + currentWord.slice(1);
    result = result + changedWord + '|';
}

result = result.slice(0, result.length - 1); //Remove the trailing '|'
let outputFile = filename.split('.')[0] + '.out'; // Generate output filename with .out extension
fs.writeFileSync(outputFile, result);
