/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Jasmine Bhatia
   Date: 05/19/2024
*/


function sortString(inputString) {
    return inputString.split('').sort().join('');
  }

$("#submit").click(function(){


// get value of input field
const userName = $("#user-name").val();

// now let's sort it
userNameSorted = sortString(userName);

// append a new div to our output div
$("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
});