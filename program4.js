/* Program 4 */
/* Write a JavaScript program to get the difference between a given number and 13,
 if the number is greater than 13 return double the absolute difference.  */

// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR



var number = prompt("Enter a number either less than or greater than 13: ");
var thirteen = 13;

alert(difference(number));

function difference(number){
		if(number <= thirteen){
		return "Since number is less than 13 then difference: " + (thirteen - number);
	} else{
		return "Since number is greater than 13 then double the difference: " + ((number - thirteen) * 2);
	}
}
