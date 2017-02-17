(function(window, undefined){
	"use strict";
	console.log("<!-----------------object----------------->");
	
	function Foo() {
	    this.value = 42;
	}
	Foo.prototype = {
	    method: function() {
	    	return "Hi"
	    }
	};

	function Bar() {
		console.log("init");
	}

	Bar.prototype = new Foo();
	Bar.prototype.foo = 'Hello World';
	Bar.prototype.constructor = Bar;

	var test = new Bar();
	console.log(test);
	console.log(test.value);
	console.log(test.method());

	let a  = (function(){
    	return typeof arguments;
	})();
	let b  = (function(){
    	return arguments;
	})();
	

	console.log(a);
	console.log(typeof b);


	Foo.method = function() {
    	function test() {
	        console.log("inner",this);
    	}
    	test.bind(this)();
    	console.log("outer",this);

	}

	Foo.method();

	for(var i = 0; i < 10; i++) {
	    (function(e) {
        	setTimeout(function() {
            	console.log(e);
        	}, 1000);
    	}).call(null, i);
	}

	function Bar() {
    	return 2;
	}
	console.log(new Bar()); // новый объект

	function Test() {
    	this.value = 2;

    	return {
        	foo: 1
    	};
	}
	console.log(new Test());


}(this))