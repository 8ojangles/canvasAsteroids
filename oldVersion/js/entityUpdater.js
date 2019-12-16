function asteroidLargeUpdater() {

// set fill style for all asteroids (if changing code check for draw order for entites)

  c.fillStyle = rgb(150,150,255);  
// Particle 3 For Loop
  for(var i=asteroidsL.length-1; i>=0; i--) {
    var aL = asteroidsL[i];

    // c.drawImage(canvasDrawBuffer, aL.x, aL.y);
    c.fillCircle(aL.x,aL.y,aL.r);


    aL.x += aL.xVel/dilationFactor;
    aL.y += aL.yVel/dilationFactor;

    if (aL.x  > canvas.width + aL.r) {
    aL.x = 0 - aL.r;
    }
    if ((aL.x < 0 - aL.r)&&(aL.xVel < 0)) {
      aL.x = canvas.width+aL.r;
    }
    if (aL.y > canvas.height+aL.r) {
      aL.y = 0 - aL.r;
    }
    if ((aL.y < 0 - aL.r)&&(aL.yVel < 0)) {
      aL.y = canvas.height+aL.r;
    }

    // bullet collisions

    for(var j=bullets.length-1; j>=0; j--) {
      var bCol = bullets[j];

      var thisDist = dist(bCol.x, bCol.y, aL.x, aL.y);
      var minDist = bCol.r + aL.r;

      if (thisDist <= minDist) {
        colPointX = aL.x;
        colPointY = aL.y;
        var thisScoreText = aL.score * scoreMultiplier;
        score+=thisScoreText;
        dilationAmount+=10;
        makeScoreText(1, thisScoreText);
        makeSparks(50);
        makeAsteroidS(10);
        makeExplosions(1);
        playSndEffect(asteroidExplosion1_snd);
        bullets.splice(j,1);
        asteroidsL.splice(i,1);
        if (multiplierTarget > 0) {
          multiplierTarget--;
        }
        if (multiplierTarget == 0) {
          scoreMultiplier+=1;
          multiplierTarget = 10;
        }
      }

    }

  }
}

function asteroidSmallUpdater() {
// Particle 3 For Loop
  for(var i=asteroidsS.length-1; i>=0; i--) {
    var aS = asteroidsS[i];

    // c.fillStyle = rgb(150,150,255);
    c.fillCircle(aS.x,aS.y,aS.r);

    aS.x += aS.xVel/dilationFactor;
    aS.y += aS.yVel/dilationFactor;

    if (aS.x  > canvas.width + aS.r) {
    aS.x = 0 - aS.r;
    }
    if ((aS.x < 0 - aS.r)&&(aS.xVel < 0)) {
      aS.x = canvas.width+aS.r;
    }
    if (aS.y > canvas.height+aS.r) {
      aS.y = 0 - aS.r;
    }
    if ((aS.y < 0 - aS.r)&&(aS.yVel < 0)) {
      aS.y = canvas.height+aS.r;
    }

    // bullet collisions
    for(var j=bullets.length-1; j>=0; j--) {
      var bCol = bullets[j];

      var thisDist = dist(bCol.x, bCol.y, aS.x, aS.y);
      var minDist = bCol.r + aS.r;

      if (thisDist <= minDist) {
        colPointX = aS.x;
        colPointY = aS.y;
        makeSparks(50);
        makeExplosions(1);
        dilationAmount+=20;
        var thisScoreText = aS.score * scoreMultiplier;
        score+=thisScoreText;
        makeScoreText(1, thisScoreText);
        bullets.splice(j,1);
        asteroidsS.splice(i,1);
        if (multiplierTarget > 0) {
          multiplierTarget--;
        }
        if (multiplierTarget == 0) {
          scoreMultiplier+=1;
          multiplierTarget = 10;
        }
      }
    }
  }
}

function powerUpUpdater() {

  for(var i=powerUps.length-1; i>=0; i--) {
    var pu = powerUps[i];

    c.fillStyle = rgb(pu.colR,pu.colG,pu.colB,pu.colA);
    c.fillCircle(pu.x,pu.y,pu.r);

    var thisDist = dist(p.x, p.y, pu.x, pu.y);
    var minDist = p.r + pu.r;

    pu.x += pu.xVel/dilationFactor;
    pu.y += pu.yVel/dilationFactor;


      if (thisDist <= minDist) {
        colPointX = pu.x;
        colPointY = pu.y;
        makeExplosions(1);
        powerUps.splice(i,1);
        if (firingCooldown == 10) {
          firingCooldown = 7;
          bulletSpeed = 25;
        }
      }

    if (pu.x  > canvas.width + pu.r) {
    pu.x = 0 - pu.r;
    }
    if ((pu.x < 0 - pu.r)&&(pu.xVel < 0)) {
      pu.x = canvas.width+pu.r;
    }
    if (pu.y > canvas.height+pu.r) {
      pu.y = 0 - pu.r;
    }
    if ((pu.y < 0 - pu.r)&&(pu.yVel < 0)) {
      pu.y = canvas.height+pu.r;
    }

  }

}

function scoreTextUpdater() {
// Particle 3 For Loop
  for(var i=scoreText.length-1; i>=0; i--) {
    var st = scoreText[i];
    c.fillStyle = rgba(st.colR,st.colG,st.colB,st.colA);
    c.font = "20pt arial";
    c.fillStyle = "#ccc"; 
    c.fillText(st.thisScore, st.x,st.y);
    st.colR-=2;
    st.colG-=2;
    st.colA-=0.05;
    st.y -= 1;
    if (st.colA <= 0.05) {
      scoreText.splice(i,1);
    }

  }
}


function explosionsUpdater() {
// Particle 3 For Loop
  for(var i=explosions.length-1; i>=0; i--) {
    var ex = explosions[i];

    c.lineWidth = ex.line;
    c.strokeStyle = rgba(ex.colR,ex.colG,ex.colB,ex.colA);
    c.strokeCircle(ex.x,ex.y,ex.r);
    c.strokeCircle(ex.x,ex.y,ex.r*0.25);

    ex.colG-=10/dilationFactor;
    ex.colB-=10/dilationFactor;
    ex.colA-=0.05/dilationFactor;
    ex.r+=25/dilationFactor;
    ex.line-=2;
    if (ex.colA <= 0.05) {
      explosions.splice(i,1);
    }

  }
}

function sparksUpdater() {
// Particle 3 For Loop
  for(var i=sparks.length-1; i>=0; i--) {
    var sp = sparks[i];

    c.fillStyle = rgba(sp.colR,sp.colG,sp.colB,sp.colA);
    c.fillCircle(sp.x,sp.y,sp.r);

    sp.colR-=2/dilationFactor;
    sp.colG-=2/dilationFactor;
    sp.colB-=0/dilationFactor;
    sp.colA-=0.02/dilationFactor;

    sp.x += sp.xVel;
    sp.y += sp.yVel;
    
    // sp.r-=0.1/dilationFactor;
    if (sp.colA <= 0.1) {
      sparks.splice(i,1);
    }

  }
}