console.log("game.js loaded")

var counter = 0;
var win = 0;
var loses = 0;

//random number displayed to user between 19-120
var targetNumber = Math.floor(Math.random() * 119) + 19;
//when crystal clicked add specific number to players total score number between 1-12
var numberOptions = Math.floor(Math.random() * 12) +1;
var whiteCrystal = $("#whiteCrystal");
var purpleCrystal = $("#purpleCrystal");


$("#randomNumber").text(targetNumber);


//numberOptions value given to whiteCrystal
whiteCrystal.attr("data-crystalvalue", numberOptions);

$("#whiteCrystal").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    console.log("crystal value" + crystalValue)

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

purpleCrystal.attr("data-crystalvalue", numberOptions);

$("#purpleCrystal").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    console.log("crystal value" + crystalValue)

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
    //when crystal clicked update players score counter
//game restarts when player wins or loses
    //when new game see new random number, crystals will have 4 new hidden values, user score and score counter will reset to 0
//show number of wins and loses