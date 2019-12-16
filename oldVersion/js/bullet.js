// bullet emmision function
function bulletEmmisionFunct() {

  if (playerAlive) {

    if (firing) {
      firingCooldownTotal = firingCooldown*dilationFactor;
      if (currBullets > 0) {
        playSndEffect(gunShot1_snd);
        makeBullet(1);
        currBullets = 0;
      }
      if (currBullets < 1) {
        
        if (counter - firingTime >= firingCooldownTotal) {
          
          currBullets++;
          
          firingTime = counter;
        }
      }
    }
    if(firing == false) { 
      firingTime = 0;
      currBullets = 1;
    }

  } // close playerAlive
  
} // close bulletEmmisionFunct

// bullet updater
function bulletUpdater() {

// set bullet color
  c.fillStyle = 'white';

// bullet updater for loop
  for(var i=bullets.length-1; i>=0; i--) {
    var b = bullets[i];
// bullet render
    c.fillCircle(b.x,b.y,b.r);
// bullet x/y update
    b.x += b.xVel/dilationFactor;
    b.y += b.yVel/dilationFactor;
// bullet collisions
    if ((b.x > canvas.width)||(b.x < 0)||(b.y > canvas.height)||(b.y < 0)) {
      bullets.splice(i,1);
    }
  }
}