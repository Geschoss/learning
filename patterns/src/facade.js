console.log("!----------Facade----------!");
'use strict';

let myevent = {
  stop: function(e) {
    e.preventDefault();
    e.stopPropagation();
  }
};