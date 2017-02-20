(function(window, undefined){
	"use strict";
	console.clear();
	console.log("array");


	let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
	let arr = ['первый элемент', 'второй элемент'];
	let numberArray = [1,2,3,4,5,6,7,8,9,10];

	//Array.from()
	function f(){
		return Array.from(arguments);
	}
	console.log(f(1,2,3,4));

	//Array.isArray()
	function _isArray(arg){
		return Array.isArray(arg);
	}

	console.log(_isArray([1,2]));
	console.log(_isArray(null));
	console.log(_isArray(1));
	console.log(_isArray("sdsdфывфыв"));
	console.log(_isArray({ __proto__: Array.prototype }));

	//concat
	let concatArray = years.concat(arr);
	console.log(concatArray);

	//copyWithin
	let copyWithinArray = [1,2,3,4,5,6,7,8,9,10];
	console.log([1,2,3,4,5,6,7,8,9,10].copyWithin(0,3));
	console.log([1,2,3,4,5,6,7,8,9,10].copyWithin(1,3));
	console.log([1,2,3,4,5,6,7,8,9,10].copyWithin(4,3));
	console.log([].copyWithin.call({length: 5, 0: 0, 1: 1, 2: 2, 3: 3},0,1));

	//entries
	let entriesArray = years.entries();

	console.log(entriesArray.next());
	console.log(entriesArray.next().value);
	console.log(entriesArray.next().value); 
	console.log(entriesArray.next().value); 

	//every 
	function isBigEnough(element, index, array){
		return element >= 10;
	}
	[12, 5, 8, 130, 44].every(isBigEnough);   // false
	[12, 54, 18, 130, 44].every(isBigEnough); // true

	//fill
	console.log([1,2,3,4,5].fill(4));
	console.log([1,2,3,4,5].fill(4,1,2))

	//filter
	console.log(numberArray.filter((el,index,arr)=> el >= 5));



	//find
	function isPrime(element, index, array){
		let start = 2;
		while(start <= Math.sqrt(element)){
			if(element%start++ < 1){
				return false;
			}
		}
		return element > 1;

	}

	console.log([4,6,7,8,12,21,122].find(isPrime));
	//findIndex
		function isPrime(element, index, array){
		let start = 2;
		while(start <= Math.sqrt(element)){
			if(element%start++ < 1){
				return false;
			}
		}
		return element > 1;

	}

	console.log([4,6,7,8,12,21,122].findIndex(isPrime));

	//forEach
	function logArrayElements(element, index, array){
		console.log(`a[${index}] = ${element}`);
	}

	[2,4,5,,6].forEach(logArrayElements);

}(this))

