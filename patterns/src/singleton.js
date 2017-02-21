console.log("!----------Singleton----------!");
//static
function Universe() {

  if(typeof Universe.instance === "object") {
    return Universe.instance;
  }
  this.start_time = 0;
  this.bang = "Big";

  Universe.instance = this;
}
var uni1 = new Universe();
var uni2 = new Universe();
console.log("static uni1 === uni2",uni1 === uni2);

//closure юзлес если в будущем будем расширять прототип
function UniverseClosure() {
  var instance = this;
  this.start_time = 0;
  this.bang = "Big";

  UniverseClosure = function() {
    return instance;
  }
}
var uni3 = new UniverseClosure();
var uni4 = new UniverseClosure();
console.log("closure uni3 === uni4", uni3 === uni4);

//closure2
function UniverseClosure2() {
  var instance;
  UniverseClosure2 = function UniverseClosure2() {
    return instance;
  };
  UniverseClosure2.prototype = this;
  instance = new UniverseClosure2();
  instance.constructor = UniverseClosure2;
  this.start_time = 0;
  this.bang = "Big";
  return instance
}
var uni5 = new UniverseClosure2();
var uni6 = new UniverseClosure2();
console.log("closure uni5 === uni6", uni5 === uni6);

//closure3
var UniverseClosure3;

(function() {
  var instance;
  UniverseClosure3 = function UniverseClosure3() {
    if(instance){
      return instance;
    }
    instance = this;
    this.start_time = 0;
    this.bang = "Big";
  }

}());
var uni7 = new UniverseClosure3();
var uni8 = new UniverseClosure3();
console.log("closure uni7 === uni8", uni7 === uni8);

