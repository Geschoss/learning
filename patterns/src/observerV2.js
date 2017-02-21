
console.log("!----------Observer2----------!");

let publisherV2 = {
  subscribers: {
    any: []
  },
  on: function(type, fn, context) {
    type = type || 'any';
    fn = typeof fn === 'function' ? fn : context[fn];

    if(typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push({fn: fn, context: context || this});
  },
  remove: function(type, fn, context) {
    this.visitSubscribers('unsubscribe', type, fn, context);
  },
  fire: function(type, publication) {
    this.visitSubscribers('publish', type, publication);
  },
  visitSubscribers: function(action, type, arg, context) {
    let pubtype = type || 'any',
      subscribers = this.subscribers[pubtype],
      i,
      max = subscribers ? subscribers.length : 0;

    for(i = 0; i < max; i += 1) {
      if(action === 'publish') {
        subscribers[i].fn.call(subscribers[i].context, arg);
      } else {
        if(subscribers[i].fn === arg &&
          subscribers[i].context === context) {
          subscribers.splice(i, 1);
        }

      }
    }
  }
};

function PlayerV2(name, key){
  "use strict";
  this.points = 0;
  this.name = name;
  this.key = key;
  this.fire('newplayer', this)
}
PlayerV2.prototype.play = function() {
  this.points += 1;
  this.fire('play',this);
};

let scoreboardV2 = {
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

let game = {
  keys: {},
  addPlayer: function(player) {
    let key = player.key.toString().charCodeAt(0);
    this.keys[key] = player;
  },
  handleKeypress: function(e) {
    e = e || window.event;
    if(game.keys[e.which]){
      game.keys[e.which].play();
    }
  },
  handlePlay: function(player) {
    let i,
      players = this.keys,
      score = {};
    for(i in players){
      if(players.hasOwnProperty(i)){
        score[players[i].name] = players[i].points;
      }
    }
    this.fire('scorechange', score);
  }
};

function makePublisherV2(o) {
  let i;
  for(i in publisherV2) {
    if(publisherV2.hasOwnProperty(i) && typeof publisherV2[i] == 'function') {
      o[i] = publisherV2[i];
    }
  }
  o.subscribers = {any: []};
}

makePublisherV2(PlayerV2.prototype);
makePublisherV2(game);

PlayerV2.prototype.on('newplayer', 'addPlayer', game);
PlayerV2.prototype.on('play', 'handlePlay', game);
game.on('scorechenge',scoreboardV2.update,scoreboardV2);
window.onkeypress = game.handleKeypress;

let playername, key;
while(1){
  playername = prompt('Add player (name)');
  if(!playername){
    break;
  }
  while(1){
    key = prompt('Key  for ' + playername + '?');
    if(key){
      break;
    }
  }
  new PlayerV2(playername,key);
}






