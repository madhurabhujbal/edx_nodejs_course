//this program explains difference between  '==' and '==='

function equals(val){
    if (val == 10){ // '==' converts datatype of operand for comparison. Hence 10 and '10' are equal
        return console.log('value is equal to 10 irrespective of its datatype');
    }
        return console.log('value is not equal to 10 irrespective of its datatype');
}

function strictEquals(val){
    if (val === 10){  // '===' does not convert datatype of any operand for comparison. Hence, 10 and '10' are not equal
        return console.log('value and datatype is equal');
    }
        return console.log('value might be equal, but datatype isnt. Hence not equal.');
}

equals('10');
strictEquals('10');