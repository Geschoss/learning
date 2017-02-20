(function(window, undefined){
	"use strict";
	console.clear();
	console.log("<!-----------------string----------------->");

	//fromCharCode
	console.log(String.fromCharCode(65, 66, 67));

	console.log(String.fromCharCode.apply(String,[65, 66, 67]));


	//chatAt
	let anyString = 'Дивный новый мир';

	console.log("Символ по индексу 0   равен '" + anyString.charAt(0)   + "'");
	console.log("Символ по индексу 1   равен '" + anyString.charAt(1)   + "'");
	console.log("Символ по индексу 2   равен '" + anyString.charAt(2)   + "'");
	console.log("Символ по индексу 3   равен '" + anyString.charAt(3)   + "'");
	console.log("Символ по индексу 4   равен '" + anyString.charAt(4)   + "'");
	console.log("Символ по индексу 5   равен '" + anyString.charAt(5)   + "'");
	console.log("Символ по индексу 999 равен '" + anyString.charAt(999) + "'");

	//concat
	let concatStr = 'Hello, ';
	console.log(concatStr.concat('Kavin', ', nice day'));

}(this))