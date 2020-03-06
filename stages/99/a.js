window.addEventListener("load", () => {
  const audio = new Audio('http://goo.gl/WppRG9');
  window.logo.addEventListener( "animationstart", () => audio.play() );
  window.play.addEventListener( "click", () => document.body.classList.add('playing'));
});
