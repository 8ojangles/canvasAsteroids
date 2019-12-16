// create array to hold bullets
var bullets = [];

// create bullet emmiter
function makeBullet(numBullet) {
// bullet emmision function
// numbullet = number of bullets
  for(var i=0; i<numBullet; i++){
    var b = {
    x : p.x,
    y : p.y,
    xVel : aimXVel,
    yVel : aimYVel,
    r : 3
    }; // close var bullet
      // create particles (bullet options)  
      bullets.push(b);
  } // close for loop
} // close function makeBullet

//////////////////////////////////////////////

// create array to hold asteroids Large
var asteroidsL = [];
// asteroidL emmision function
// numasteroidL = number of asteroidsL
function makeAsteroidL(numAsteroidL) {
  
  for(var i=0; i<numAsteroidL; i++){
    randomPopulate();
    var aL = {
    x : resultX,
    y : resultY,
    xVel : random(-2,2),
    yVel : random(-2,2),
    score: 100,
    r : 50
    }; // close var asteroidLarge
      // create particles (asteroidLarge options)  
      asteroidsL.push(aL);
  } // close for loop

} // close function makeAsteroidLarge

//////////////////////////////////////////////

// create array to hold asteroids Small
var asteroidsS = [];
// asteroidS emmision function
// numasteroidS = number of asteroidsS
function makeAsteroidS(numAsteroidS) {
  
  for(var i=0; i<numAsteroidS; i++){
    var aS = {
    x : colPointX,
    y : colPointY,
    xVel : random(-2,2),
    yVel : random(-2,2),
    score: 200,
    r : 10
    }; // close var asteroidSmall
      // create particles (asteroidSmall options) 
      asteroidsS.push(aS);
  } // close for loop

} // close function makeAsteroidSmall

//////////////////////////////////////////////


// create array to hold powerUps
var powerUps = [];
// powerUps emmision function
// numpowerUps = number of powerUps
function makePowerUp(numPowers) {
  
  for(var i=0; i<numPowers; i++){
    var pu = {
    x : random(0,canvas.width),
    y : random(0,canvas.height),
    xVel : random(-2,2),
    yVel : random(-2,2),
    r : 20,
    colR : 0,
    colG : 255,
    colB : 0,
    colA : 1

    }; // close var makePowerUps
      // create particles (powerUps options)
      powerUps.push(pu);
  } // close for loop

} // close function powerUps

//////////////////////////////////////////////

// create array to hold scoreText
var scoreText = [];
// scoreText emmision function
// thisScoreText = number of scoreText
function makeScoreText(numScores, thisScoreText) {
  
  for(var i=0; i<numScores; i++){
    var st = {
    x : colPointX,
    y : colPointY,
    thisScore : thisScoreText,
    colR : 100,
    colG : 100,
    colB : 255,
    colA : 1

    }; // close var makeExplosions
      // create particles (Score Text options)
      scoreText.push(st);
  } // close for loop

} // close function makeScoreText

//////////////////////////////////////////////

// create array to hold explosions
var explosions = [];
// explosions emmision function
// numEplosions = number of explosions
function makeExplosions(numExplode) {
  
  for(var i=0; i<numExplode; i++){
    var ex = {
    x : colPointX,
    y : colPointY,
    colR : 255,
    colG : 255,
    colB : 255,
    colA : 1,
    line: 20,
    r : 10

    }; // close var makeExplosions
      // create particles (Explosions options)
      explosions.push(ex);
  } // close for loop

} // close function makeExplosions


// create array to hold explosions
var sparks = [];
// explosions emmision function
// numEplosions = number of explosions
function makeSparks(numSparks) {
  
  for(var i=0; i<numSparks; i++){
    var sp = {
    x : colPointX,
    y : colPointY,
    xVel : random(-5,5),
    yVel : random(-5,5),
    colR : 255,
    colG : 255,
    colB : 255,
    colA : 1,
    line: 20,
    r : random(1,3)

    }; // close var makeExplosions
      // create particles (Explosions options)
      sparks.push(sp);
  } // close for loop

} // close function makeExplosions