/* Program 6 */
/* Write a JavaScript program to compute the sum of the two given integers. 
If the two values are same, then returns triple their sum. */

// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR


var firstNumber = parseInt(prompt("Enter first number: "));
var secondNumber = parseInt(prompt("Enter second number: "));

if(firstNumber != secondNumber){
	alert(sum(firstNumber, secondNumber));
} else{
	alert(tripleSum(firstNumber, secondNumber));
}

function sum(firstNumber, secondNumber){
	return "Since first and second number are not equal, hence their Sum: " + (firstNumber + secondNumber);
}

function tripleSum(firstNumber, secondNumber){
	return "Since first and second number are equal, hence triple their Sum: " + ((firstNumber + secondNumber) * 3);
}
