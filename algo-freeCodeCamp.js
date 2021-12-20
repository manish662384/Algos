/* This is a Page containing Algorithms from freeCodeCamp */

/* --------------------------------------- */
// Program 1
// Factorial of a number using while loop
/*function factorialize(num) {
  var fact = num;
  var num2 = 1;

  if(num == 0){
    return ++fact;
  }
 
  while(num2 < num){    
    fact = fact * num2;
    num2++;
    console.log(fact);
    
  } 

  return fact;
}

console.log(factorialize(171));
*/

// Factorial of a number using Recursion
/*function factorialize(num){
	if(num <= 0)
		return 1;
	return num * factorialize(num-1);
}

console.log(factorialize(5));
*/

/* --------------------------------------- */
// Program 2
/* 
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, 
and spacing.
Note:
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in 
order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

/*function palindrome(str) {
  // Good luck!
  var removeChars = str.replace(/[^A-Za-z0-9]/gi, '');
  var plainString = removeChars.toLowerCase();

  var reverseString = plainString.split("").reverse().join("");

  if(reverseString == plainString)
  	return true;
  else
  	return false; 
}

alert(palindrome("five|\_/|four"));*/

/* --------------------------------------- */
//Program 2
/*
# Return the length of the longest word in the provided sentence. Your response should be a number.

Here are some helpful links:
String.prototype.split()
String.length
*/
/*
function findLongestWord(str) {
  var arr = str.split(" ");
  var maxLength = 0;

  for(var i=0; i<arr.length; i++){
  	
  	if(arr[i].length > maxLength){
  		maxLength = arr[i].length;
  	}
  }

  return maxLength;
}

alert(findLongestWord("The quick brown fox jumped over the lazy dog"));
*/

// Using .reduce()
/*
function findLongestWord(str){
	return str.split(" ")
		.reduce(function(x, y){
			return Math.max(x, y.length);
	}, 0);
}

alert(findLongestWord("The quick brown fox jumped over the lazy dog"));
*/

//Using Recursion
/*
function findLongestWord(str){
	str = str.split(" "); //convert string into an array

	// If array has only one element then return it's length
	if(str.length == 1){
		return str[0].length;
	}

	//if the first element's length is greater than the second element's (or equal) 
  	//remove the second element and recursively call the function
	if(str[0].length >= str[1].length){
		str.splice(1,1);
		return findLongestWord(str.join(" "));
	}

	//if the second element's length is greater thant the first element's start 
  	//call the function past the first element
	if(str[0].length <= str[1].length){
		//from the first indexed element to the last element inclusive.
		return findLongestWord(str.slice(1, str.length).join(" "));
	}
}

alert(findLongestWord("The quick brown fox jumped over the lazy dog"));
*/

/* --------------------------------------- */
//Program 3
/*
# Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Here are some helpful links:
String.prototype.split()
*/
//Solution 1
/*
function titleCase(str) {
  var array1 = str.toLowerCase().split(" ");

  var finalArray = array1.map(function(val){
  	return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  
  return finalArray.join(" ");
}

alert(titleCase("I'm a little tea pot"));
*/

/*
//Solution 2
//Regex explanation:

//Find all non-whitespace characters (\S)
//At the beginning of string (^)
//Or after any whitespace character (\s)

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

alert(titleCase("I'm a little tea pot"));
*/

/* --------------------------------------- */
//Program 4
/*Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will 
contain exactly 4 sub-arrays.
e.g: largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001]

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Here are some helpful links:
Comparison Operators
*/
/*
//Solution 1: Procedural Approach
function largestOfFour(arr) {
  // You can do this!
  var finalArray = [];
  
  for (var i = 0; i < arr.length; i++) {
  	var largestNo = arr[i][0];
  	for(var j = 1; j < arr[i].length; j++){
  		if(arr[i][j] > largestNo)
  			largestNo = arr[i][j];
  	}
  	finalArray[i] = largestNo;
  }

  return finalArray;
}

alert(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
*/
/*
//Solution 2: Declarative Approach
function largestOfFour(arr){
	return arr.map(function(group){
		return group.reduce(function(prev, current){
			return (current > prev) ? current : prev;
		});
	});
}

alert(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
*/
/*
//Solution 3(Advanced): Declarative Approach
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

alert(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
*/

/* --------------------------------- */
//Program 5
/*Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).
E.g,
confirmEnding("Bastian", "n") should return true. 
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("Open sesame", "same") should return true.

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this 
challenge, we would like you to use one of the JavaScript substring methods instead.

Here are some helpful links:

String.prototype.substr()
String.prototype.substring()
*/

/*
//Solution 1: Myself (removing the length of chars of target string from the main string, and then comparing both)

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLength = target.length;
  var strNew = str.slice(-targetLength);
  //var strNew = str.substr(str.length - targetLength);	// Using substr()

  return (strNew === target) ? true : false;
}

alert(confirmEnding("Open sesame", "same"));
*/
/*
//Solution 2
function confirmEnding(str, target){
	return str.substr(-target.length) === target;
}

alert(confirmEnding("Open sesame", "same"));
*/

/* ------------------------------------- */
//Program 6
/*Repeat a string repeat a string
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
E.g,
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", -2) should return "".

Here are some helpful links:
Global String Object
*/
/*
//Solution 1: Myself
function repeatStringNumTimes(str, num) {
  // repeat after me
  var finalStr = "";

  while(num > 0){
  	finalStr += str;
  	num--;
  }
  return finalStr;
}

alert(repeatStringNumTimes("abc", 3));
*/

/*
//Solution 2: Recursion
function repeatStringNumTimes(str,num){
	if(num < 0)
		return "";
	if(num == 1)
		return str;
	else
		return str + repeatStringNumTimes(str, num-1);
}

alert(repeatStringNumTimes("abc", 3));
*/

/*
//Solution 3: repeat()
function repeatStringNumTimes(str, num){
	//The repeat() method constructs and returns a new string which contains the specified 
	//number of copies of the string on which it was called, concatenated together.
	return num > 0 ? str.repeat(num) : "";
}

alert(repeatStringNumTimes("abc", 3));
*/

/* -------------------------- */
/*Program 7
Truncate a string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots 
does not add to the string length in determining the truncated string.

E.g,
truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) 
should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) 
should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".

Here are some helpful links:
String.prototype.slice()
*/

/*
//Solution 1: Myself
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var strLength = str.length;
  var dots = "...";

  if(num <= 3){
  	return str.slice(0, num) + dots;
  }	else if(strLength > num){
  	return str.slice(0, num-3) + dots;
  }	else if(strLength <= num){
  	return str;
  }	
}

alert(truncateString("Peter Piper picked a peck of pickled peppers", 14));
*/


/* -------------------------------- */
//Program 8
/*Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns 
them as a two-dimensional array.

E.g, 
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()
*/

/*
//Solution 1
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i+=size) {
	arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}

alert(chunkArrayInGroups(["a", "b", "c", "d"], 2));
*/

/*
//Solution 2
function chunkArrayInGroups(arr, size) {

  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}

alert(chunkArrayInGroups(["a", "b", "c", "d"], 2));
*/

/*
//Solution 3
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}
alert(chunkArrayInGroups(["a", "b", "c", "d"], 2));
*/

/*
//Solution 4
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}
alert(chunkArrayInGroups(["a", "b", "c", "d"], 2));
*/

/* ------------------------------------ */
//Program 9
/*Slasher Flick
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

E.g,
slasher([1, 2, 3], 2) should return [3].
slasher([1, 2, 3], 0) should return [1, 2, 3].
slasher([1, 2, 3], 9) should return [].
slasher([1, 2, 3], 4) should return [].
slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].

Here are some helpful links:
Array.prototype.slice()
Array.prototype.splice()
*/

/*
//Solution 1
function slasher(arr, howMany) {
  // it doesn't always pay to be first

  return arr.splice(howMany);
}

alert(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));
*/

/*
//Solution 2
function slasher(arr, howMany){
	// it does't always pay to be first

	return arr.slice(howMany);
}
alert(slasher([1, 2, 3], 9));
*/


/* ---------------------------------------- */
//Program 10
/*Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second 
element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in 
the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

E.g,
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.

Here are some helpful links:

String.prototype.indexOf()
*/

/*//Solution 1
function mutation(arr){

	var sample = arr[1].toLowerCase();
	var target = arr[0].toLowerCase();

	for(var i=0; i<sample.length; i++){

		if(target.indexOf(sample[i]) === -1)
			return false;
	}
	return true;	 
}

alert(mutation(["voodoo", "no"]));
*/

/*
//Solution 2
function mutation(arr){
	return arr[1].toLowerCase()
		.split('')
		.every(function(letter){
			return arr[0].toLowerCase()
				.indexOf(letter) !== -1;
		});
}

alert(mutation(["voodoo", "no"]));
*/

/* ------------------------------------------ */
/*
//Program 11

Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

E.g,
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([1, null, NaN, 2, undefined]) should return [1, 2].

Here are some helpful links:

Boolean Objects
Array.prototype.filter()
*/

/*
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);  	
}

alert(bouncer([7, "ate", "", false, 9]));
*/

/* ----------------------------------------------- */
//Program 12
/*
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed
by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

E.g,
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
Here are some helpful links:

Arguments object
Array.prototype.filter()
*/

/*
//Solution 1
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }

  return arr.filter(Boolean);
}

alert(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/

/*
//Solution 2
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

alert(destroyer(["tree", "hamburger", 53], "tree", 53));
*/

/* ---------------------------------------- */
//Programm 13
/*
Where do I belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20]
 and 19 is less than 20 (index 2) and greater than 5 (index 1).

getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3.

Here are some helpful links:

Array.prototype.sort()
*/
/*
//Solution 1: Myself
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  arr.sort(function(a, b){
  	return a-b;
  });

  for(var i=0; i<arr.length; i++){
  	if(arr[i] >= num)
  		return i;
  }

  return arr.length;
}

alert(getIndexToIns([2, 20, 10], 19));
*/

/*
//Solution 2:
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var times = arr.length; // runs the for loop once for each thing in the array
  var count = 0; 
  for (i=0;i<times;i++){
    if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num
    return count; // the above equals num's position in a sorted array
}

alert(getIndexToIns([40, 60], 50));
*/

/*
//Solution 3
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a-b});
  return arr.indexOf(num);
}

alert(getIndexToIns([40, 60], 50));
*/

/*
//Solution 4
function getIndexToIns(arr, num) {
  // sort and find right index
  var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum)=> num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}

alert(getIndexToIns([40, 60], 500));
*/

/* ------------------------------------------------- */
//Program 14
//Slice and Splice
/*You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

e.g,
frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) 
	should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
*/

/*
//Solution 1
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!  
	var newArray = [] ;
	newArray.splice(n, 0, arr2);
	newArray = [].concat.apply([], newArray);

	newArray.splice(n, 0, arr1);
	newArray = [].concat.apply([], newArray);

	console.log(newArray);
	return newArray;
}

alert(frankenSplice([1, 2, 3], [4, 5, 6], 1));

*/

/* --------------------------------------------------------------- */
//Program 15
/*
Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the 
array that passes a truth test (second argument). If no element passes the test, return undefined.

E.g,
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/

/*
//Solution 1: Myself
function findElement(arr, func) {
  //let num = 0;

  for(var i=0; i<arr.length; i++){
  	if(arr[i] % 2 === 0)
  		return arr[i];
  } 

  //return num;
}

alert(findElement([1, 2, 3, 4], num => num % 2 === 0));

*/

/*
//Solution 2
function findElement(arr, func) {
  // Make num undefined by default
  var num;

  // Loop thorugh the array and use the function to check
  for (var a = 0; a < arr.length; a++) {
    if (func(arr[a])) {
      // Store the first case and break the loop
      num = arr[a];
      return num;
    }
  }

  // otherwise return undefined
  return num;
}

findElement([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
});

// test here
alert(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));

*/

/*
//Solution 3
function findElement(arr, func) {
  filterArr = arr.filter(func); //filter array with the function provided

  return filterArr[0]; //return the first element that returns true, or undefined if no elements return true
}

// test here
alert(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
*/


/* ----------------------------------------- */
//Program 16
/*
Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

E.g,
booWho(true) should return true.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ "a": 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
booWho("a") should return false.
booWho("true") should return false.
booWho("false") should return false.
*/

/*
//Solution 1: Myself
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.

  return bool === true || bool === false;
}

alert(booWho(false));
*/

/*
//Solution 2
function booWho(bool){
	// What is the new fad diet for ghost developers? The Boolean.
	return typeof bool === 'boolean';
}

alert(booWho(false));
*/


/* ------------------------------------------------------------------------------------- */
//https://learn.freecodecamp.org/coding-interview-prep/algorithms/find-the-symmetric-difference

//Program 17	-	***Incomplete
/*
//Find the Symmetric Difference

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the 
provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of 
two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For 
every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements 
which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting 
array must contain only unique values (no duplicates).

E.g,
sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
*/

/*function sym(args) {

}

alert(sym([1, 2, 3], [5, 2, 1, 4]));
*/

/* -------------------------------------------------------------------------------- */


