let audio;

window.addEventListener("load", () => {
  audio = new Audio('http://goo.gl/WppRG9');
  window.logo.addEventListener( "animationstart", () => audio.play() );
  window.play.addEventListener( "click", () => {
    document.body.classList.add('playing');
    window.setTimeout(startFade, 780);
  });
});

function startFade() {
    const doFade = setInterval(() => {
      if (audio.volume > 0) {
        audio.volume -= 0.01;
      } else {
        clearInterval(doFade);
      }
    }, 20
);
}

