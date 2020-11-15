let audio;

window.addEventListener("load", () => {
  audio = new Audio('https://ia803204.us.archive.org/16/items/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3');
  window.logo.addEventListener( "animationstart", () => {
    audio.play()
    window.setTimeout(startFade, 78000);
  });
  window.play.addEventListener( "click", () => {
    document.body.classList.add('playing');
  });
});

function startFade() {
  const doFade = setInterval(() => {
    if (audio.volume > 0) {
      const newVolume = audio.volume - 0.004;
      audio.volume = newVolume > 0 ? newVolume : 0;
    } else {
      clearInterval(doFade);
    }
  }, 20);
}
