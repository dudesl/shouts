#!/usr/bin/env node
var program = require('commander');
var shouts = require('./shouts.js');

program
  .command('voice <shout>')
  .description('make a shout whit voice')
  .action(function(shout, options){
    shouts.voice(shout);
  }
);

program
  .command('cow <shout>')
  .description('make a shout whit a cow!')
  .action(function(shout, options){
    shouts.cow(shout);
  }
);

program.parse(process.argv);
