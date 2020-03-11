//this program explains difference between  '!=' and '!=='

function inEquals(val){
    if (val != 10){ // '!=' converts datatype of operand for comparison. Hence 10 and '10' are not unequal
        return console.log('value is not equal to 10 irrespective of its datatype');
    }
        return console.log('value is equal to 10 irrespective of its datatype');
}

function strictInEquals(val){
    if (val !== 10){  // '!==' does not convert datatype of any operand for comparison. Hence, 10 and '10' are not equal
        return console.log('value is equal but datatype is not. Hence not equal');
    }
        return console.log('value and datatype is equal');
}

inEquals('10');
strictInEquals('10');