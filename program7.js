/* Program 7 */
/* Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. */

// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#ED


var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number: "));

function func50(num1, num2){
	if((num1 == 50 || num2 == 50) || (num1+num2 == 50))
		return true;
	else
		return false;
}

var check = func50(num1, num2);

if(check)
	alert(check + " - Since one of the number is 50 or their sum is 50");
else
	alert(check + " - Since one of the number is not equal to 50 neither their sum");