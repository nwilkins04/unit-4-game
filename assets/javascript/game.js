console.log("game.js loaded")

$(document).ready(function(){

var counter = 0;
var wins = 0;
var loses = 0;

//random number displayed to user between 19-120
var targetNumber = Math.floor(Math.random() * 99) + 19;
//when crystal clicked add specific number to players total score number between 1-12
var numberOptions1 = Math.floor(Math.random() * 12) +1;
var numberOptions2 = Math.floor(Math.random() * 12) +1;
var numberOptions3 = Math.floor(Math.random() * 12) +1;
var numberOptions4 = Math.floor(Math.random() * 12) +1;
var whiteCrystal = $("#whiteCrystal");
var purpleCrystal = $("#purpleCrystal");
var tealCrystal = $("#tealCrystal");
var orangeCrystal = $("#orangeCrystal");

$("#randomNumber").text(targetNumber);

//numberOptions value given to whiteCrystal
whiteCrystal.attr("data-whitecrystalvalue", numberOptions1);

$("#whiteCrystal").on("click", function() {
    var whiteCrystalValue = ($(this).attr("data-whitecrystalvalue"));
    whiteCrystalValue = parseInt(whiteCrystalValue);
    counter += whiteCrystalValue;
    console.log("white crystal value" + whiteCrystalValue)
    totalScore();
})

//numberOptions value given to purpleCrystal
purpleCrystal.attr("data-purplecrystalvalue", numberOptions2);

$("#purpleCrystal").on("click", function() {
    var purpleCrystalValue = $(this).attr("data-purplecrystalvalue");
    purpleCrystalValue = parseInt(purpleCrystalValue);
    counter += purpleCrystalValue;
    console.log("purple crystal value" + purpleCrystalValue)
    totalScore();
})

//numberOptions value given to tealCrystal
tealCrystal.attr("data-tealcrystalvalue", numberOptions3);

$("#tealCrystal").on("click", function() {
    var tealCrystalValue = $(this).attr("data-tealcrystalvalue");
    tealCrystalValue = parseInt(tealCrystalValue);
    counter += tealCrystalValue;
    console.log("teal crystal value" + tealCrystalValue)
    totalScore();
})

//numberOptions value given to orangeCrystal
orangeCrystal.attr("data-orangecrystalvalue", numberOptions4);

$("#orangeCrystal").on("click", function() {
    var orangeCrystalValue = $(this).attr("data-orangecrystalvalue");
    orangeCrystalValue = parseInt(orangeCrystalValue);
    counter += orangeCrystalValue;
    console.log("orange crystal value" + orangeCrystalValue)
    totalScore();
})
    
// for score
var totalScore = function () {
    if(counter === targetNumber) {
        wins++
        $("#wins").text(wins);
        alert("you win!");
        reset();
    }

    else if(counter >= targetNumber) {
        loses++
        $("#loses").text(loses);
        alert("you lose!");
        reset();
    }

    $("#user-Score").text(counter);
    console.log(counter)
    }

//reset game
var reset = function() {
    counter = 0
    targetNumber = Math.floor(Math.random() * 99) + 19;
    $("user-Score").text(counter);
    $("#randomNumber").text(targetNumber);
    numberOptions1 = Math.floor(Math.random() * 12) +1;
    numberOptions2 = Math.floor(Math.random() * 12) +1;
    numberOptions3 = Math.floor(Math.random() * 12) +1;
    numberOptions4 = Math.floor(Math.random() * 12) +1;
    whiteCrystal.attr("data-whitecrystalvalue", numberOptions1);
    purpleCrystal.attr("data-purplecrystalvalue", numberOptions2);
    tealCrystal.attr("data-tealcrystalvalue", numberOptions3);
    orangeCrystal.attr("data-orangecrystalvalue", numberOptions4);
}

//closes document on ready
})