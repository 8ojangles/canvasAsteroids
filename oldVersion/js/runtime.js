/* **************** Start Draw Function ********************* */
function draw() {
/* **************** Start Draw Function ********************* */

// Housekeeping

// frame rate
  frameRate = 60;
// Each frame reset color overlay mode
  c.globalCompositeOperation = 'source-over';
// background
  c.clearRect(0,0,canvas.width,canvas.height);


if (startGame) {               

  if (populateAsteroids) {
    if (asteroidsL < 10) {
      makeAsteroidL(10);
      populateAsteroids = false;
    } else {
    makeAsteroidL(0);  
    }
  }

if (gameTime == 20) {
      if (currPowerUps < 1) {
        currPowerUps = 1;
        powerUpThisTime = counter;
      }
    }

    if ((currPowerUps == 1)&&(powerUps.length < 1)) {
      makePowerUp(1);
      currPowerUps--;
    }

if (dilationSwitch) {
  if (dilationFactor < 4) {
    dilationFactor+=0.5;
  }
  if (dilationAmount > 0) {
    dilationAmount-=1;
  }
  if (dilationAmount == 0) {
    dilationSwitch = false;
  }
}
if (!dilationSwitch) {
  if (dilationFactor > 1) {
    dilationFactor-=0.5;
  }
}

/* **************** runtime function list ********************* */
playerAimRender();
asteroidLargeUpdater();
asteroidSmallUpdater();
explosionsUpdater()
bulletUpdater();
powerUpUpdater();
scoreTextUpdater();
sparksUpdater();

bulletEmmisionFunct();
playerRender();
playerUpdate();
playerControls();

}
gameOverAnim();
/* **************** close runtime function list 
********************* */

/* **************** update counter ********************* */
counter++;
/* ****************  debug output ********************* */
debugOutput();
/* **************** Close Draw Function ******************** */
};
/* **************** Close Draw Function ******************** */