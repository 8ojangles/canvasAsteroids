var debugOutput = function() {
  c.textAlign = "center";
  c.font = "20pt arial";
  c.fillStyle = "#ccc";
  
  c.fillText("score "+score,canvas.width/2,50);
  c.fillText("multiplier "+scoreMultiplier,canvas.width/2 - 200,50);
  c.fillText("playerLives "+playerLives,200,50);
  c.fillText("warp "+dilationAmount,150,200);
  c.fillText("dilationSwitch "+dilationSwitch,150,250);
  c.fillText("firingCooldownTotal "+firingCooldownTotal,150,300);
  c.fillText("currBullets "+currBullets,150,350);
  //c.fillText("powerUpTimerSet "+powerUpTimerSet,300,900);

  gameTime = parseInt((counter - powerUpThisTime) / 60, 10);
  c.fillText("gameTime "+gameTime ,300,canvas.height - 50);

};