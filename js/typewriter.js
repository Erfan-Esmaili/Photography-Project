// !!typewriter

var app = document.getElementById("header__title-typewriter");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
  cursor: "",
});

typewriter
  .typeString("آتلیه نی نی عکس اصفهان!")
  .pauseFor(2000)
  .start();
