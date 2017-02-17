"use strict";
console.log("array");

let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
let arr = ['первый элемент', 'второй элемент'];

//Array.from()

function f(){
	return Array.from(arguments);
}

console.log(f(1,2,3,4));

//Array.isArray()

function isArray(arg){
	return Array.isArray(arg);
}


//Полифил
Array.prototype.myFunction = function() {
	return this + " my";
}

console.log(isArray([1,2]));
console.log(isArray(null));
console.log(isArray(1));
console.log(isArray("sdsdфывфыв"));
console.log(isArray({ __proto__: Array.prototype }));


console.log(Array.prototype.myFunction.call([1,2,4]));
