/* Program 2 */
// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR

/* Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.
 If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". */


 let max = 10;
 let min = 1;
let randomNo = Math.floor(Math.random() * (max-min+1) + min); // Returns a random integer between min (inclusive) and max (inclusive)
console.log(randomNo); // to view the generated random number on console
let randomUserNo = prompt("Enter a number between 1 to 10: ");

if(randomUserNo == randomNo){
	alert("Good Work");
} else{
	alert("Not matched");
}

