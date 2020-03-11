const fs = require('fs')

let data = fs.readFileSync('customer-data.csv','utf-8');
let lines = data.split('\r\n');
let header = lines[0].split(',');
console.log(header);
// do this for every line
let fields = lines[1].split(',');
var array=[];
var obj={};
for( let i = 0; i < fields.length; i++) {
    obj[""+header[i]] = fields[i];
}
array.push(obj);
// obj={};
// fields = lines[2].split(',');
// for( let i = 0; i < fields.length; i++) {
//     obj[""+header[i]] = fields[i];
// }
// array.push(obj);
// console.log(array)