var cowsay = require('cowsay');
var say = require('say');

function cow(shout){
  console.log(cowsay.say({
    text : shout
  }))
}

function voice(shout){
  say.speak('Alex', shout);
}

// Podes empezar armando un objeto con los métodos que queres exponer
// var shouts = {
//   cow : cow,
//   voice: voice
// }

// Algo de ayuda aca http://www.sitepoint.com/understanding-module-exports-exports-node-js/
