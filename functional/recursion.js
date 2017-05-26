console.clear();
console.log('/--------------recursion--------------/');
function mult(...args){
	if(args.length <= 2){
		return args[0] * args[1];
	}
	return args[0] * mult(...args.slice(1));
}


console.log(mult(5,5,5));


function foo(x) {
	return function() {
		return x;
	}
}

function addInner(x,y) {
	return x + y;
}

function add(fn1,fn2){
	return addInner(fn1(), fn2());
}


function addLoop(arr){
	var total = 0;
	arr.forEach(x => total =  add(foo(total),foo(x)));
	return total;
}

function addRecursion(arr){
	if(arr.length <= 2){
		return add(foo(arr[0]),foo(arr[1]));
	}
	return addRecursion(
		[
			add(foo(arr[0]),foo(arr[1]))
		].concat(arr.slice(2))
	);
}

function addReduce(arr){
	return arr.reduce((acc, x) => add(foo(acc),foo(x)),0);
}
const arr = [1, 1, 1, 1, 1];
console.log(addLoop(arr));
console.log(addRecursion(arr));
console.log(addReduce(arr));
