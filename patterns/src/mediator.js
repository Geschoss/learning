console.log("!----------Mediator----------!");
"use strict";

function Player(name) {
  this.points = 0;
  this.name = name;
}

Player.prototype.play = function() {
  this.points += 1;
  mediator.played();
};

let scoreboard = {
  element: document.getElementById('result'),
  update: function(score) {
    let i, msg = '';
    for(i in score) {
      if(score.hasOwnProperty(i)) {
        msg += '<p><strong>' + i + '<\/strong>: ';
        msg += score[i];
        msg += '<\/p>';
      }
    }
    this.element.innerHTML = msg;
  }
};

let mediator = {
  players: {},
  setup: function() {
    let players = this.players;
    players.home = new Player('Home');
    players.guest = new Player('Guest');
  },
  played: function() {
    let players = this.players,
      score = {
        Home: players.home.points,
        Guest: players.guest.points
      };
    scoreboard.update(score);
  },
  keypress: function(e){
    e = e || window.event;
    if(e.which === 49){
      mediator.players.home.play();
      return
    }
    if(e.which === 48){
      mediator.players.guest.play();
      return;
    }
  }
};

mediator.setup();
// window.onkeypress = mediator.keypress;

// setTimeout(function() {
//   window.onkeypress = null;
  //alert('Game over');
// },30000);
