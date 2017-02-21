console.log("!----------Decorator----------!");
"use strict";
function Sale(price) {
  this.price = price || 100;
}
Sale.prototype.getPrice = function() {
  return this.price;
};

Sale.decorators = {};

Sale.prototype.decorate = function(decorator) {
  var F = function() {},
    overrides = this.constructor.decorators[decorator],
    i, newobj;

  F.prototype = this;
  newobj = new F();
  newobj.uber = F.prototype;
  for(i in overrides) {
    if(overrides.hasOwnProperty(i)) {
      newobj[i] = overrides[i];
    }
  }
  return newobj;
};

Sale.decorators.fedtax = {
  getPrice: function() {
    let price = this.uber.getPrice();
    price += price * 5 / 100;
    return price;
  }
};

Sale.decorators.quebec = {
  getPrice: function() {
    let price = this.uber.getPrice();
    price += price * 7.5 / 100;
    return price;
  }
};


Sale.decorators.money = {
  getPrice: function() {
    return "$" + this.uber.getPrice().toFixed(2);
  }
};

Sale.decorators.cdn = {
  getPrice: function() {
    return "CDN" + this.uber.getPrice().toFixed(2);
  }
};

var sale = new Sale(100); // цена 100 долларов
sale = sale.decorate('fedtax'); // добавить федеральный налог
sale = sale.decorate('quebec'); // добавить местный налог
sale = sale.decorate('money'); // форматировать как денежную сумму
console.log(sale.getPrice());


function SaleList(price) {
  this.price = price || 100;
  this.decorators_list = [];
}
SaleList.decorators = {};
SaleList.decorators.fedtax = {
  getPrice: function(price) {
    return price + price * 5 / 100;
  }
};
SaleList.decorators.quebec = {
  getPrice: function(price) {
    return price + price * 7.5 / 100;
  }
};
SaleList.decorators.money = {
  getPrice: function(price) {
    return "$" + price.toFixed(2);
  }
};
SaleList.prototype.decorate = function(decorator) {
  this.decorators_list.push(decorator);
};
SaleList.prototype.getPrice = function() {
  let price = this.price,
    i,
    max = this.decorators_list.length,
    name;
  for(i = 0; i < max; i +=1){
    name = this.decorators_list[i];
    price = SaleList.decorators[name].getPrice(price);
  }
  return price;
};


var saleList = new SaleList(100); // цена 100 долларов
saleList.decorate('fedtax'); // добавить федеральный налог
saleList.decorate('quebec'); // добавить местный налог
saleList.decorate('money'); // форматировать как денежную сумму
console.log(saleList.getPrice());