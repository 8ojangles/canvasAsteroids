// menu controls

$(document).ready(function(){

// start button 

$('#startButton').click(function(){
  $(this).parent().removeClass('on').addClass('off');
  $('#gameTypeMenu').removeClass('off').addClass('on');
});

// instruction button

$('#instructionButton').click(function(){
  $(this).parent().removeClass('on').addClass('off');
  $('#gameInstructions').removeClass('off').addClass('on');
});

// return buttons

$('#returnButton1, #returnButton2').click(function(){
  $(this).parent().removeClass('on').addClass('off');
  $('#startScreen').removeClass('off').addClass('on');
});

// Classic Game button

$('#classicGameButton').click(function(){
  $('#gameMenuContainer').removeClass('open').addClass('closed');
  startGame = true;
});



});