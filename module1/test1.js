const fs = require('fs');

 let custFile = fs.readFileSync('C:\\edx_node.js_downloadPage\\customer-data.csv', 'utf-8');
// console.log(custFile);

let lines = custFile.split('\r\n');
// console.log(lines[0]);
// console.log('Length of custfile:' + custFile.length);
// console.log('Length of lines:' + lines.length);
let fields = lines[0].split(',');
// for (i=0; i<lines[0].length; i++){
//     let fields = lines[0].split(',\n');
// }
// console.log(fields);

let array = [];
for (let row = 1; row < lines.length; row++){
    let cols = lines[row].split(',');
    //Iterating over columns of the current row
    let mapping = {};
    for(let col = 0; col < cols.length; col++) {
       // console.log('Content of field(row, col): (' + row + ',' + col + ') => ' + cols[col]);
        mapping[fields[col]] = cols[col];
    }
    // console.log(JSON.stringify(mapping));
    array.push(mapping);
}
    console.log(array);
