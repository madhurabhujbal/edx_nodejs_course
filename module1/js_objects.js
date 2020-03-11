//objects are key value pairs in JS. They are similar to arrays except that properties are used to access data
//instead of indexes. Properties can be any datatype i JS or even an object.

var myDog = {
    "name" : "Tommy",
    "legs" : "4",
    "tail" : "1",
    "favourite food" : "bone and milk",
    "friends" : ["Jammy", "Sammy", "Noddy"],
    288 : "badge number = 288"
};

//console.log("My dog's friends: " + myDog.friends); //this is dot notation way to access the property of object

var fav_food = myDog["favourite food"]; //this is bracket notation to access the property of object. It is specially
                                        //used when property has space in it. eg: "favourite food"
//console.log("My dog's favourite food: " + fav_food);

var number = 288;
var badgeNumber = myDog[number];
//console.log("My dog's badge number: " + badgeNumber);

//updating object properties
myDog.name = "Tommy-Tom";
myDog['bark'] = "bow-wow";
//console.log("My dog's new name: " + myDog.name);
//console.log("My dog's bark: " + myDog['bark']);

//deleting object property
delete myDog.tail;
//console.log("My dog object: " + myDog);

//checking if object contains specific property
function checkProperty(objProperty) {
    if (myDog.hasOwnProperty(objProperty)){
        return myDog[objProperty];
    } else{
        return "Property does not exist for My dog";
    }
}
console.log(checkProperty("name"));



