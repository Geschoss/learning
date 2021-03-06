console.log("<!----------------codewars------------------------>");
'use strict';

function chained(functions) {
  return function(arg){
  	return functions.reduce((prev, curr)=>{
  		return curr(prev);
  	}, arg);
  }
}


function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }

function f4(x){ return x.split("").concat().reverse().join("").split(" ")}
function f5(xs){ return xs.concat().reverse() }
function f6(xs){ return xs.join("_") }


console.log(chained([f1,f2,f3])(0), 4 );
console.log(chained([f1,f2,f3])(2), 36 );
console.log(chained([f3,f2,f1])(2), 12 );

console.log(chained([f4,f5,f6])("lorem ipsum"), "merol_muspi");


console.log("Remove anchor from URL");
function removeUrlAnchor(url){
  return url.split('#')[0];
}

// returns 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com#about'));

// returns 'www.codewars.com?page=1' 
console.log(removeUrlAnchor('www.codewars.com?page=1'));


console.log("Equal Sides Of An Array");

function findEvenIndex(arr)
{
	let rightSum 	= arr.reduce((prev, curr)=> curr+prev,0);
	let length 		= arr.length;
	let leftSumm 	= 0;
	for(let i = 0; i < length; i++){
		rightSum = rightSum - arr[i];
		if(leftSumm == rightSum){
			return i;
		}
		leftSumm = leftSumm + arr[i];
	}
	return -1;
  //Code goes here!
}

console.log(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");

console.log("Math Issues");

Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number);
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};

console.log(Math.round(0.4), 0, 'Math.round(0.4)');
console.log(Math.round(0.5), 1, 'Math.round(0.5)');

console.log(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
console.log(Math.ceil(0.5), 1, 'Math.ceil(0.5)');

console.log(Math.floor(0.4), 0, 'Math.floor(0.4)');
console.log(Math.floor(0.5), 0, 'Math.floor(0.5)');

console.log("Replace With Alphabet Position");

function alphabetPosition(text) {
	let alphabet =  'abcdefghijklmnopqrstuvwxyz'.split('');
  	return text.split('').map(item => alphabet.indexOf(item.toLowerCase()) + 1).filter(item => item > 0 ).join(' ');
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

console.log('functional js')
const g = n => n + 1;
const f = n => n * 2;
const trace = label => value => {
  console.log(`${ label }: ${ value }`);
  return value;
};


const pipe = (...fns) => x => fns.reduce((y, f) => f(y),x);

const job = pipe(
        g,
        trace('after-g'),
        f,
        trace('after-g'),
    );

console.log(job(2));
