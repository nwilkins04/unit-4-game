console.log("game.js loaded")

var counter = 0;
var win = 0;
var loses = 0;

//random number displayed to user between 19-120
var targetNumber = Math.floor(Math.random() * 99) + 19;
//when crystal clicked add specific number to players total score number between 1-12
var numberOptions = Math.floor(Math.random() * 12) +1;
var whiteCrystal = $("#whiteCrystal");
var purpleCrystal = $("#purpleCrystal");

var NewCrystalValue = whiteCrystalValue + purpleCrystalValue

$(document).ready(function(){

$("#randomNumber").text(targetNumber);

//numberOptions value given to whiteCrystal
whiteCrystal.attr("data-whitecrystalvalue", numberOptions);

$("#whiteCrystal").on("click", function() {
    var whiteCrystalValue = ($(this).attr("data-whitecrystalvalue"));
    whiteCrystalValue = parseInt(whiteCrystalValue);
    counter += whiteCrystalValue;
    console.log("white crystal value" + whiteCrystalValue)

        //player wins when total score matches random number from beginng of game
       if (counter === targetNumber) {
            $("#wins").text(wins+1);
            alert("you win!");      
         }

         //player loses when total score is abover random number
        else if(counter >= targetNumber) {
             $("#loses").text(loses+1);
             alert("you lose!");
         }

        $("#user-Score").text(counter);
        console.log(counter)

})

//numberOptions value given to purpleCrystal
purpleCrystal.attr("data-purplecrystalvalue", numberOptions);

$("purpleCrystal").on("click", function(){
    var purpleCrystalValue = $(this).attr("data-purplecrystalvalue");
    purpleCrystalValue = parseInt(purpleCrystalValue);
    counter += purpleCrystalValue;
    console.log("purple crystal value" + purpleCrystalValue)
})
//new fuction for score
    if(counter === targetNumber) {
        $("#wins").text(wins+1);
        alert("you win!");
    }

    else if(counter >= targetNumber) {
        $("#loses").text(loses+1);
        alert("you lose!");
    }

    $("#user-Score").text(counter);

    //reset game but keep score
})

var NewCrystalValue = whiteCrystalValue + purpleCrystalValue

    //when crystal clicked update players score counter
//game restarts when player wins or loses
    //when new game see new random number, crystals will have 4 new hidden values, user score and score counter will reset to 0
//show number of wins and loses