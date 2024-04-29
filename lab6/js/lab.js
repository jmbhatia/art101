// index.js - to practice with Arrays and Objects
// Author: Jasmine Bhatia
// Date: 4/28/2024

// Define Variables
myTransport = [" bus", " walking", " friends with cars", " work car"];

// Create Object
myMainRide = {
    make: "Volkswagon",
    model: "GOLF R",
    color: "blue",
    year: 2017,
    age: function(){
      return 2024 - this.year;
    }
}

// output
document.writeln("Transportation I use: ", myTransport,"</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");