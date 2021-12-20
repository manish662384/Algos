/* Program 3 */
/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  */

// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR


var check = prompt("Enter 'c' for temp in Celsius and 'f' for temp in Fahrenheit:");

if(check == "c"){
	var tempC = prompt("Enter a temperature in Celsius to convert it in Fahrenheit:");
	var result1 = tempC / 5 * 9 + 32;
	alert(tempC + " degree C is " + result1 + " degree F");
} else if(check == "f") {
	var tempF = prompt("Enter a temperature in Fahrenheit to convert it in Celsius");
	var result2 = (tempF - 32) / 9 * 5;
	alert(tempF + " degree F is " + result2 + " degree C");
}


