/*
// Program 8 - Linear Search
Source: https://www.hackerearth.com/practice/algorithms/searching/linear-search/tutorial/
Time Complexity:
The time complexity of the linear search is O(N) because each element in an array is compared only once.

Problem:
You have been given an array of size N consisting of integers. In addition you have been given an element M you need to 
find and print the index of the last occurrence of this element M in the array if it exists in it, 
otherwise print -1. Consider this array to be 1 indexed.

E.g,
Input Format:

The first line consists of 2 integers N and M denoting the size of the array and the element 
to be searched for in the array respectively . The next line contains N space separated integers denoting the 
elements of of the array.

Output Format

Print a single integer denoting the index of the last occurrence of integer M in the array if it exists, otherwise print -1.

5 1
1 2 3 4 1 should return 5(position of last indexed 1 in the array)
*/


//Solution 1: My solution

function linearSearch(){
	var arraySize = parseInt(prompt("Enter a number denoting the size of array: "));
	var number = parseInt(prompt("Enter the number to find it's last index in the array: "));

	var array = [];
	var indexNo = -1;

	for(var i=0; i<arraySize; i++){
		array.push(parseInt(prompt("Enter the number one by one to compose the array of size: " + arraySize)));
	}

	for(var i=0; i<arraySize; i++){
		if(array[i] === number)
			indexNo = i+1;		
	}

	return console.log("Index value of "+number+" is: "+ indexNo);
	
}

linearSearch();