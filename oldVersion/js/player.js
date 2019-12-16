// create player object
var player = {
  x : canvas.width/2,
  y : canvas.height/2,
  r : 20,
  colR : 150,
  colG : 150,
  colB : 150,
  xVel : 0,
  yVel : 0
};

// shorthand variable for player
var p = player;

var aimDeltaX,aimDeltaY,aimAngle,aimXVel,aimYVel;

// aim to mouse function
var aimCalculation = function() {
  aimDeltaX = mouseX - p.x;
  aimDeltaY = mouseY - p.y;
  aimAngle = Math.atan2(aimDeltaY,aimDeltaX);
  aimXVel = Math.cos(aimAngle) * bulletSpeed;
  aimYVel = Math.sin(aimAngle) * bulletSpeed;
};

// create render function player 
var playerRender = function() {

if (playerAlive) {
  if ((playerLeftKey)||(playerRightKey)) {
  boosterXRender();
  }
  if ((playerUpKey)||(playerDownKey)) {
  boosterYRender();
  }

  c.fillStyle = rgb(p.colR,p.colG,p.colB);
  c.fillCircle(p.x,p.y,p.r);
  c.lineWidth = 4;

  aimCalculation();

  c.strokeStyle = rgb(200,0,0);
  c.save();
  c.translate(p.x,p.y);
  c.rotate(aimAngle);
  c.beginPath()
  c.moveTo(0,0);
  c.lineTo(20,0);
  c.stroke();
  c.restore();
  }
};

var boosterXRender = function() {
  var boostLength = random(50,150);
  c.globalCompositeOperation = 'lighter';
  if (playerLeftKey) {
  var boostGrad = c.createLinearGradient(p.x,p.y-10,p.x+boostLength,p.y+10);
  boostGrad.addColorStop(0,'rgba(255,255,255,1)');
  boostGrad.addColorStop(1,'rgba(0,0,255,0)');
  c.fillStyle = boostGrad;
  c.fillRect(p.x,p.y-10,boostLength,20);
  }
  if (playerRightKey) {
    var boostGrad = c.createLinearGradient(p.x,p.y-10,p.x-boostLength,p.y+10);
    boostGrad.addColorStop(0,'rgba(255,255,255,1)');
    boostGrad.addColorStop(1,'rgba(0,0,255,0)');
    c.fillStyle = boostGrad;
    c.fillRect(p.x,p.y-10,-boostLength,20);
    }
  c.globalCompositeOperation = 'source-over';
}

var boosterYRender = function() {
  var boostLength = random(50,150);
  c.globalCompositeOperation = 'lighter';
  if (playerUpKey) {
    var boostGrad = c.createLinearGradient(p.x-10,p.y,p.x+10,p.y+boostLength);
    boostGrad.addColorStop(0,'rgba(255,255,255,1)');
    boostGrad.addColorStop(1,'rgba(0,0,255,0)');
    c.fillStyle = boostGrad;
    c.fillRect(p.x-10,p.y,20,boostLength);
  }
  if (playerDownKey) {
    var boostGrad = c.createLinearGradient(p.x-10,p.y,p.x+10,p.y-boostLength);
    boostGrad.addColorStop(0,'rgba(255,255,255,1)');
    boostGrad.addColorStop(1,'rgba(0,0,255,0)');
    c.fillStyle = boostGrad;
    c.fillRect(p.x-10,p.y,20,-boostLength);
  }
  c.globalCompositeOperation = 'source-over';
}

var boundaryWrap = function() {
  if (p.x  > canvas.width + p.r) {
    p.x = 0 - p.r;
  }

  if ((p.x < 0 - p.r)&&(p.xVel < 0)) {
    p.x = canvas.width;
  }

  if (p.y > canvas.height) {
    p.y = 0 - p.r;
  }

  if ((p.y < 0 - p.r)&&(p.yVel < 0)) {
    p.y = canvas.height;
  }
};

var playerUpdate = function() {

  if ((playerAlive)&&(playerLives > 0)) {

  boundaryWrap();

  p.x += p.xVel/dilationFactor;
  p.y += p.yVel/dilationFactor;


  // player collisions

  // set vars for broad-phase collision check

  var playerXLowBound = p.x - 100;
  var playerXLowBound = p.x + 100;
  var playerYLowBound = p.y - 100;
  var playerYLowBound = p.y + 100;

  // check collisions with asteroidsL
  for(var i=asteroidsL.length-1; i>=0; i--) {
    aL = asteroidsL[i];

// broad-phase collision check

    // if ((aL.x > playerXLowBound)||(aL.x < playerXLowBound)) {

    //   if ((aL.y > playerYLowBound)||(aL.y < playerYLowBound)) {

          // narrow-phase collision check

          var thisDist = dist(p.x, p.y, aL.x, aL.y);
          var minDist = p.r + aL.r;

          if (thisDist <= minDist) {
            colPointX = aL.x;
            colPointY = aL.y;
            p.x = null;
            p.y = null;
            thisTime = counter;
            playerCollision = true;
            playerLives-=1;
            playerAlive = false;
            asteroidsL.splice(i,1);
            makeAsteroidS(10);
            makeExplosions(1);
            scoreMultiplier = 1;
            multiplierTarget = 10;
            firingCooldown = 10;
            bulletSpeed = 20;
          }

    } // close collisions with asteroidsL
  
  for(var i=asteroidsS.length-1; i>=0; i--) {
    aS = asteroidsS[i];

    var thisDist = dist(p.x, p.y, aS.x, aS.y);
    var minDist = p.r + aS.r;

      if (thisDist <= minDist) {
        colPointX = aS.x;
        colPointY = aS.y;
        p.x = null;
        p.y = null;
        thisTime = counter;
        playerCollision = true;
        playerLives-=1;
        playerAlive = false;
        asteroidsS.splice(i,1);
        makeExplosions(1);
        scoreMultiplier = 1;
        multiplierTarget = 10;
        firingCooldown = 10;
        bulletSpeed = 20;
      }
    }
  
}
  if ((playerCollision)&&(playerLives > 0)) {
    if (counter - thisTime >= 120) {
      playerAlive = true;
      playerCollision = false;
      p.x = canvas.width/2;
      p.y = canvas.height/2;
      p.xVel = 0;
      p.yVel = 0;
    }
  }

    if (playerLives <= 0) {
    gameOver = true;
    startGame = false;
    }

};

var playerAimRender = function() {
  c.lineWidth = 1;
  c.strokeStyle = rgb(0,0,255);
  c.strokeCircle(mouseX,mouseY,20);

  c.beginPath()
  c.moveTo(mouseX,mouseY-10);
  c.lineTo(mouseX,mouseY-30);
  c.stroke();

  c.beginPath()
  c.moveTo(mouseX,mouseY+10);
  c.lineTo(mouseX,mouseY+30);
  c.stroke();

  c.beginPath()
  c.moveTo(mouseX-10,mouseY);
  c.lineTo(mouseX-30,mouseY);
  c.stroke();

  c.beginPath()
  c.moveTo(mouseX+10,mouseY);
  c.lineTo(mouseX+30,mouseY);
  c.stroke();

  

}