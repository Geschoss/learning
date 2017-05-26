function foo(x,y) {
	var z = x + y;
	return function() {
		return z;
	}
}

var x = foo(3,4);

console.log(x());
console.log(x());
