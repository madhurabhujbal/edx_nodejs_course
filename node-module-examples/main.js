const modFile = require('./exports-module/myModule');

console.log(`Welcome message : ${modFile.exhello()}`);

let name = 'Madhura Bhujbal';
let nameLength = modFile.stringLength(name);
console.log('Message length :' + nameLength);
