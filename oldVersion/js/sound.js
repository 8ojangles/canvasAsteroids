var audioFilePath = 'audio/';

// create sound elements

// sound elements
var gunShot1_snd = document.createElement('audio');
gunShot1_snd.src = audioFilePath+'soundEffects/Woosh-Mark_DiAngelo-4778593.mp3';

var gunShot1slow_snd = document.createElement('audio');
gunShot1slow_snd.src = audioFilePath+'soundEffects/Woosh-Mark_DiAngelo-4778593.mp3';

var asteroidExplosion1_snd = document.createElement('audio');
asteroidExplosion1_snd.src = audioFilePath+'soundEffects/44 Magnum-SoundBible.com-162460153.mp3';

var asteroidExplosion1slow_snd = document.createElement('audio');
asteroidExplosion1slow_snd.src = audioFilePath+'soundEffects/44 Magnum-SoundBible.com-162460153.mp3';

// sound effect play functions

function playSndEffect(thisEffect) {
  thisEffect.currentTime = 0;
  // if (dilationSwitch) {
    thisEffect.playbackRate.value = 0.5;
  // } 
  thisEffect.play();
}