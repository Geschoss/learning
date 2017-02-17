(function(window, undefined){
	"use strict";
	console.log("<!-----------------function----------------->");

	let slice = Function.prototype.call.bind(Array.prototype.slice);
	console.log("slice: ", slice);
	console.log("slice: ", slice([1,2,3], 1,2));

	var _toString = Function.prototype.call.bind(Object.prototype.toString);

	var getTypeString = function(obj) {
	  return Object.prototype.toString.call(obj).slice(8, -1);
	};

	console.log("_toString: ",_toString({}));     
	console.log("_toString: ",_toString(window)); 
	console.log("_toString: ",_toString([]));     

	function _hasOwnProperty(obj,prop){
		return Object.prototype.hasOwnProperty.call(obj, prop); 
	}

	console.log("_hasOwnProperty",_hasOwnProperty({'bar': 1}, 'bar'));
}(this))
