/*
    lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
    Requirements: jQuery must be loaded for this script to work.
    Author: Jasmine Bhatia
    Date: 5/13/2024
 */

//add button to challenge section
$("#challenge").append("<button class='button-challenge'>Make Pretty</button>");

//add button to problems section
$("#problems").append("<button class='button-problems'>Make Pretty</button>");

//add button to results section
$("#results").append("<button class='button-results'>Make Pretty</button>");

//add click listerner to buttons
$(".button-challenge").click(function(){
    $("#challenge").toggleClass("special");
})

$(".button-problems").click(function(){
    $("#problems").toggleClass("special");
})

$(".button-results").click(function(){
    $("#results").toggleClass("special");
})
