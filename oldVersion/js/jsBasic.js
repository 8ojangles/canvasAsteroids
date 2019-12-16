/* ****************  housekeeping ********************* */
  
// define offscreen canvas for video buffering

// define the canvas as a variable. define the canvas context as 2d
var canvas = document.getElementById('myCanvas'),
    c = canvas.getContext('2d');

// Set Canvas full screen
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;



// set up global vars for game

// global tick
var counter = 0;

// score vars
var score = 0;
var levelScore = 0;
var scoreMultiplier = 1;
var multiplierTarget = 10;

// game start vars
var startGame = false;
var gameOver = false;
var gameTime;

// global steroid vars
var populateAsteroids = true;

// players vars
var playerAlive = true;
var playerCollision = false;
var playerLives = 3;

//player power up vars
var powerUpTimer = 1200;
var powerUpThisTime = 0;
var powerUpTimerSet = false;
var currPowerUps = 0;

// warp time vars
var dilationFactor = 1;
var dilationAmount = 0;
var dilationSwitch = false;
var dilationSwitchCheck = true;

// player shooting vars
var firing = false;
var firingTime = 0;
var firingCooldown = 10;
var firingCooldownTotal;
var currBullets = 1;
var bulletSpeed = 20;

// collision coordinate vars
var colPointX = 0;
var colPointY = 0;

// game state machine
var currGameState = false;

function gameState() {

  switch(currGameState) {

    case "firstLoad" :
    break;

    case "gameMenu" :
    break;

    case "gameIntro" :
    break;

    case "levelIntro" :
    break;

    case "gamePlay" :
    break;

    case "levelOutro" :
    break;

    case "gameWin" :
    break;

    case "gameLose" :
    break;

    case "gameOutro" :
    break;

  } // close gameState switch

} // close gameState Function



var resultX, resultY;

function randomPopulate() {

  var rand1 = random(-50,canvas.width+50);
  var rand2 = random(-50,canvas.height+50);
  var rand3 = random(0,4);

  if (rand3 < 1) {
    resultX = -50;
    resultY = parseInt(rand2,10);
  } else if ((rand3 > 1)&&(rand3 < 2)) {
    resultX = parseInt(rand1,10);
    resultY = -50;
  } else if ((rand3 > 2)&&(rand3 < 3)) {
    resultX = canvas.width+50;
    resultY = parseInt(rand2,10);
  } else if (rand3 > 3) {
    resultX = parseInt(rand1,10);
    resultY = canvas.height+50;
  }


}

var initGame = function() {
  score = 0;
  startGame = false;
  gameOver = false;
  populateAsteroids = true;
  playerAlive = true;
  playerCollision = false;
  playerLives = 3;
  p.x = canvas.width/2;
  p.y = canvas.height/2;
  p.yVel = 0;
  p.xVel = 0;
  gT.colA = 1;
  asteroidsL.length = 0;
  asteroidsS.length = 0;
  explosions.length = 0;
  bullets.length = 0;
};

var gameOverText = {
  colR : 255,
  colG : 255,
  colB : 255,
  colA : 1,
  font : "50pt arial",
  x : canvas.width/2,
  y : canvas.height/2,
  align : "center"
}

var gT = gameOverText;

var gameOverAnim = function() {
  if (gameOver) {
    startGame = false;
    c.font = gT.font;
    c.fillStyle = rgba(gT.colR,gT.colG,gT.colB,gT.colA);
    c.textAlign = gT.align;
    c.fillText("GAME OVER",gT.x,gT.y);
    c.font = "50pt arial"
    c.fillText("SCORE: "+score,gT.x,gT.y + 120);

    gT.colA -= 0.005;

    if (counter%240 == 0) {
      $('.startButton.off').removeClass('off').addClass('on');
      $('.playerControls.off').removeClass('off').addClass('on');
      initGame();
    }
  }
}
