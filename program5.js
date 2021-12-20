/* Program 5 */
/* Write a JavaScript exercise to create a variable using a user-defined name. */

// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR


var check = 100;
alert("Here 'check'= 100");
var varName = prompt("Enter a string to set it as a variable name and assign same value as 'check' ");

this[varName] = check;
alert("Now, " + varName + "= " + this[varName]);
