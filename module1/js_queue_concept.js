//This program explains how to create queue which is FIFO formation.

var testArray = [1,2,3,4,5];

function nextInLine(arr, item){

    arr.push(item);//this will push the item element at the end of array.
    return arr.shift(); //This will remove and return the first item in the array
}

console.log("before: " + JSON.stringify(testArray));//JSON.stringify converts array to string.
console.log(nextInLine(testArray, 6));
console.log("aftrer: " + JSON.stringify(testArray));