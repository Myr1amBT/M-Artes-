let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('¿Qué seria la vida, si no tuvieramos el valor de intentar nuevas cosas?')
  .pauseFor(200)
  .deleteChars(10)
  .start();
