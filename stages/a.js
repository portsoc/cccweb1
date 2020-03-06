window.addEventListener("load", () => {
  const audio = new Audio('http://goo.gl/WppRG9');
  window.logo.addEventListener( "animationstart", () => audio.play() );
});
