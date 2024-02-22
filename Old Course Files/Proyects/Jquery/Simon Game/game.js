var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var start = false;
var reset = false;
var order = 0;


// buttonAudio.src = "sounds/" + randomChosenColour + ".mp3";


$(".btn").on("click", function() {
  if (start == true) {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    if (userClickedPattern[order] != gamePattern[order]) {
      gameOver();
    } else {
      if ((order + 1) == level) {
        order = 0;
        userClickedPattern = [];
        setTimeout(function() {
          nextSequence();
        }, 500);
      } else {
        order += 1;
      }
    }
  }
});

$(document).on("keydown", function(event) {

  if ((event.key == "a" || event.key == "A") && (start == false)) {
    nextSequence();
    start = true;
  }
  if (reset == true) {
    resetGame();
  }
});


function nextSequence() {
  var randomNumber = Math.round((Math.random() * 3));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  playSound(buttonColours[randomNumber]);
  animatePress(buttonColours[randomNumber]);
  $("h1").text("Level " + level);
  level += 1;

  console.log(gamePattern);
  $("." + randomChosenColour).fadeOut(100).fadeIn(100);
}

function playSound(name) {
  var buttonAudio = new Audio("sounds/" + name + ".mp3");
  buttonAudio.play();
}

function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}

function gameOver() {
  var gameOverAudio = new Audio("sounds/wrong.mp3");
  gameOverAudio.play();
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game Over").fadeOut(500).fadeIn(500);
  setTimeout(function() {
    $("h1").text("Game Over, Press Any Key to Restart");
  }, 3000);
  reset = true;
}

function resetGame() {
  reset = start = false;
  order = level = 0;
  userClickedPattern = gamePattern = [];
  $("h1").text("Press A Key to Start");
}
