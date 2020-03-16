const modFile = require('./module');

console.log(`Welcome message : ${modFile.exhello()}`);

let name = 'Madhura Bhujbal';
let nameLength = modFile.stringLength(name);
console.log('Message length :' + nameLength);
