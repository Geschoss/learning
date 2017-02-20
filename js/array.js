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
	console.log('from',f(1,2,3,4));

	//Array.isArray()
	function _isArray(arg){
		return Array.isArray(arg);
	}

	console.log("isArray",_isArray([1,2]));
	console.log("isArray",_isArray(null));
	console.log("isArray",_isArray(1));
	console.log("isArray",_isArray("sdsdфывфыв"));
	console.log("isArray",_isArray({ __proto__: Array.prototype }));

	//concat
	let concatArray = years.concat(arr);
	console.log("concat",concatArray);

	//copyWithin
	let copyWithinArray = [1,2,3,4,5,6,7,8,9,10];
	console.log("copyWithin",[1,2,3,4,5,6,7,8,9,10].copyWithin(0,3));
	console.log("copyWithin",[1,2,3,4,5,6,7,8,9,10].copyWithin(1,3));
	console.log("copyWithin",[1,2,3,4,5,6,7,8,9,10].copyWithin(4,3));
	console.log("copyWithin",[].copyWithin.call({length: 5, 0: 0, 1: 1, 2: 2, 3: 3},0,1));

	//entries
	let entriesArray = arr.entries();

	console.log("entries",entriesArray.next());
	console.log("entries",entriesArray.next().value);
	console.log("entries",entriesArray.next().value); 
	console.log("entries",entriesArray.next().value); 

	//every 
	function isBigEnough(element, index, array){
		return element >= 10;
	}
	[12, 5, 8, 130, 44].every(isBigEnough);   // false
	[12, 54, 18, 130, 44].every(isBigEnough); // true

	//fill
	console.log("fill",[1,2,3,4,5].fill(4));
	console.log("fill",[1,2,3,4,5].fill(4,1,2))

	//filter
	console.log("filter",numberArray.filter((el,index,arr)=> el >= 5));



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

	console.log("find: ",[4,6,7,8,12,21,122].find(isPrime));


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

	console.log("findIndex: ",[4,6,7,8,12,21,122].findIndex(isPrime));

	//forEach
	function logArrayElements(element, index, array){
		console.log(`a[${index}] = ${element}`);
	}

	[2,4,5,,6].forEach(logArrayElements);


	//includes
	console.log("includes: ",[1,2,3,4].includes(2));
	[1, 2, 3].includes(3, 3);  // false

	//indexOf
	console.log("indexOf: ",numberArray.indexOf(2));
	console.log("indexOf: ",numberArray.indexOf(2, 4));

	//join
	console.log("join: ",years.join(','));

	//kesy
	let keysIterator = years.keys();

	console.log("keys: ", keysIterator.next());
	console.log("keys: ", keysIterator.next());
	console.log("keys: ", keysIterator.next());
	console.log("keys: ", keysIterator.next());

	//lastIndexOf()
	console.log("lastIndexOf: ", numberArray.lastIndexOf(4));


	//map
	console.log("map: ",numberArray.map(elem => elem*2));

	//pop
	let myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];
	let popped = myFish.pop();
	console.log("pop: ",myFish); // ['ангел', 'клоун', 'мандарин']
	console.log("pop: ",popped); // 'хирург'

	//push
	let sports = ['football', 'basketball'];
	let totalPush = sports.push('swiming');
	console.log("push: ",sports);
	console.log("push: ",totalPush);

	//reduce
	console.log("reduce: ",numberArray.reduce((prev,curr)=> prev + curr,10));

	let friends = [ 
	{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 }, 
	{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
	{ name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
	]

	let allbooks = friends.reduce(function(prev, curr) {
	  return [...prev, ...curr.books];
	}, ["Alphabet"]);
	console.log("reduce: ",allbooks);

	//reduceRight
	console.log("reduceRight: ",numberArray.reduceRight((prev,curr)=> prev + curr));

	//reverse

	let reversArray = [1,2,3,4,5];
	console.log("reverse: ",reversArray.reverse());

	//shift
	let shiftArray = ['ангел', 'клоун', 'мандарин', 'хирург'];
	let shifted = shiftArray.shift();
	console.log('myFish после: ' + shiftArray);
	console.log('Удалён этот элемент: ' + shifted);

	//slice
	let fruits = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'];
	let citrus = fruits.slice(1, 3);
	console.log(citrus);

	//toLocaleString
	let number = 1337;
	let date = new Date();
	let myArr = [number, date, 'foo'];
	let str = myArr.toLocaleString();
	console.log("toLocaleString: ", str);
	
	//toString
	let toStringArray = ['Янв', 'Фев', 'Мар', 'Апр'];
	console.log(toStringArray.toString());	

	//unshift
	console.log([1, 2].unshift(0));


}(this))


