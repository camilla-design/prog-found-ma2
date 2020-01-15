/* Level 1

1. Create an array called petArray with 3 string items in it: "cat", "cow", "dog".
*/

var petArray = ["cat", "cow", "dog"];

/* 
2. Console log the value of the second item in petArray. 
*/

console.log(petArray[1]);

/* 
3.Add the item "sheep" to petArray using the push method.
*/
petArray.push("sheep");
console.log(petArray);

/* 
4. Console log how many items there are now in petArray using the length method.
*/
console.log(petArray.length);

/* 
5. Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.
*/

var catObject = {
    name: "felix",
    color: "grey",
    age: 12
};

/* 
6. Console log the value of the third property of catObject.
*/
console.log(catObject.age);

/* 
7. Take the value of catObject (the {} part) and place it inside an array called catArray.
*/
var catArray = ["felix", "grey", 12];

/*
8. Loop through catArray and console log each property of each object inside (there will be only 1 object inside).
*/
var numberOfCatArray = catArray.length;
console.log(numberOfCatArray)
for(var i = 0; i < numberOfCatArray; i++) {
    console.log(catArray[i]);
}

/* 
9. Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.
*/
function logToConsole(theConsole) {
    console.log(theConsole);
    
}
logToConsole("hello");

/*
10. Call the logToConsole function and pass in the value "donkey".
*/
function logToConsole(theConsole) {
    console.log("donkey" + theConsole);
}
