/*
// Program 14 - Bubble Sort

Bubble sort is based on the idea of repeatedly comparing pairs of adjacent elements and then swapping their positions if they exist in the wrong order.

Complexity: 
The complexity of bubble sort is O(n(power2)) in both worst and average cases, because the entire array needs to be iterated for every element.

Problem:
You have been given an array A of size N . you need to sort this array non-decreasing order using bubble sort. However, you do not need to print the sorted array . You just need to print the number of swaps required to sort this array using bubble sort
*/

//Solution 1
function bubbleSort(){
	let arraySize = parseInt(prompt("Enter the size of the Array: "));
	var list = [];

	for (var i = 0; i < arraySize; i++) {
		list.push(parseInt(prompt("Enter the array elements of size, "+ arraySize)));
	}

	function search(list, arraySize){
		let temp;
		let count = 0;

		for (var i = 0; i < arraySize; i++) {
			// arraySize-1-1 is used to avoid comparing the elements which is already sorted
			for (var j = 0; j < arraySize-i-1; j++) {
				
				if (list[j] > list[j+1]) {
					temp = list[j];
					list[j] = list[j+1];
					list[j+1] = temp;
					count++;
				}
			}
		}
		console.log("This Array is swapped "+ count+" times, and the sorted array in non-decreasing order is: "+ list);
	}

	search(list, arraySize);
}

bubbleSort();