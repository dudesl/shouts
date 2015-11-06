var cow = require('cowsay');
var say = require('say');

function cow(shout){
  console.log(cow.say({
    text : shout
  }))
}

function voice(shout){
  say.speak('Alex', shout);
}

// function Shouts(){};
//
// Shouts.prototype = {}
// Shouts.prototype.cow = cow;
//
// Shouts.prototype.voice = voice;

// module.exports = new Shouts();


// var shouts = {
//   cow : cow,
//   voice: voice
// }
//
// module.exports = shouts;


// var shouts = {
//   cow : cow,
//   voice: voice
// }
//
// module.exports = shouts;

module.exports = {
  cow : cow,
  voice: voice
};
