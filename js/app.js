
$(document).ready(function(){

  newGame();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    // new game button
    $("nav .new").click(function() {
      newGame();
    });

    $("section form").submit(function(e) {
      e.preventDefault();
      var result = parseInt($("#userGuess").val());
      var distance = randomNum - result;
      ++count;
      $("#userGuess").val("");
      $("#count").text(count);
      if (result) {
        if (result == randomNum) {
          $("#feedback").text("That's right!");
          $("#userGuess").hide();
          $("#guessButton").hide();
        }
        else if (distance >= 30) {
          $("#guessList").append("<li>" + result + "</li>");
          $("#feedback").text("Colderrr..");
        }
        else if (distance >= 20 && distance < 30) {
          $("#guessList").append("<li>" + result + "</li>");
          $("#feedback").text("Getting warm!");
        }
        else if (distance >= 10 && distance < 20) {
          $("#guessList").append("<li>" + result + "</li>");
          $("#feedback").text("Warmer!");
        }
        else if (distance >= 1 && distance < 10) {
          $("#guessList").append("<li>" + result + "</li>");
          $("#feedback").text("So hot!");
        }
        else {
        $("#guessList").append("<li>" + result + "</li>");
        $("#feedback").text("Ice cold!");
        }
      }
    });

});

var randomNum = Math.floor(Math.random() * 100) + 1;

var count = 0;

// generate number
  function makeNumber() {
    return randomNum;
  }

// make new game
  function newGame() {
    count = 0;
    randomNum = Math.floor((Math.random() * 100) + 1);
    $("#guessList li").remove();
    $("#userGuess").val("");
    $("#feedback").text("Make your Guess!");
    $("#count").text(count);
    $("#userGuess").show();
    $("#guessButton").show();
  }