"use strict";

window.addEventListener("keydown", function (e) {
  const [audio, key] = getEl(e);
  playAudio(audio);
  addKeyStyle(key);
});

function getEl(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.keys div[data-key="${e.code}"]`);
  return [audio, key];
}

function playAudio(audioEl) {
  if (!audioEl) return;
  audioEl.currentTime = 0;
  audioEl.play();
}


function addKeyStyle(key) {
  key.classList.add("playing");
  removeKeyStyle(key);  
}

function removeKeyStyle(key){
    key.addEventListener('transitionend', (e) => {
        if(e.propertyName !== "transform") return;
        key.classList.remove('playing');
    })
}