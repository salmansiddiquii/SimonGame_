
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern) 

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});



function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length){

      setTimeout(() => {
        nextSequence();
      },1000 );
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(() => {
      $("body").removeClass("game-over");
    },200 );

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}

function startOver(){
  level =  0;
  gamePattern = [];
  userClickedPattern = [];
  started = false ;

  $("#level-title").text("Press A Key to Start");
}



function startOver (){
  level = 0;
  gamePattern = [];
  started = false;
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}




/*
const numberOfColors = ["red", "yellow", "blue", "green"];
const gamePattern = [];
const userClickedPattern = []
const gameStarted = false ; 
const level = 0 ;


$(document).keydown(function() {
  if (!gameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


// Next Sequence
function nextSequence (){
  level++;
  $("#level-title").text("Level " + level);
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = numberOfColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("h1").fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

//User Handle Button
$(".btn").on("click", function (){
  const userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound (userChosenColour);
  animatePress(userChosenColour);
})

// Add Sound
function playSound(name){
  const sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

// Add animation
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  setTimeout( ()=>{
    $("#" +  currentColor).removeClass("pressed");
  }, 100)
}


*/














/*
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){

      setTimeout( ()=>{
        nextSequence();
      }, 1000)
    } else {
      playSound("wrong");

      $("body").addClass("game-over");

      setTimeout (()=>{
        $("body").removeClass("game-remove");
      }, 200)
    }
    startOver();
  }
}


function startOver(){
  gameStarted = false ;
  level = 0;
  gamePattern = [];
}

*/