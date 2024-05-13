// index.js - to practice with Functions
// Author: Jasmine Bhatia
// Date: 5/5/2024

//Lab 8: Anon Functions and Callbacks 

//assign variable to an array of numbers
var myArray = [7, 38, 92, 64, 37, 1003]

//create function
function giveEm3(x){
    var results = x + 3
    return results;
}

//function tests
console.log(giveEm3(38));
console.log(giveEm3(92));

//every number in array 
myArray.map(giveEm3);

//anon function
myArray.map(function(x){
    var results = x * 4
    return results;
})

//Results
var mapResults = myArray.map(giveEm3);
console.log("Results: ", mapResults);