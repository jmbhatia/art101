// index.js - to practice with Functions
// Author: Jasmine Bhatia
// Date: 5/2/2024

// sortName - function that takes user input and sorts the letters of their name
function sortUserName() {
    var userName = window.prompt("Hey! What's your name? Let me fix it!");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("userArray=", nameArray);
    //sort array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

// output
document.writeln("Here's your fixed name! ",
    sortUserName(), "</br>");