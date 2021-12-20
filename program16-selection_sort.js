/*
Program 16 - Selection Sort

The Selection sort algorithm is based on the idea of finding the minimum or maximum element in an unsorted array and then putting it in its correct position in a sorted array.

Assume that the array A = [7, 5, 4, 2] needs to be sorted in ascending order.

The minimum element in the array i.e. 2 is searched for and then swapped with the element that is currently located at the first position, i.e. 7 . Now the minimum element in the remaining unsorted array is searched for and put in the second position, and so on.

Time Complexity:

To find the minimum element from the array of N elements, N-1 comparisons are required. After putting the minimum element in its proper position, the size of an unsorted array reduces to N-1 and then N-2 comparisons are required to find the minimum in the unsorted array.

Therefore (N-1) + (N-2) + ..... + 1 = (N * (N-1))/2 comparisons and N swaps result in the overall complexity of O(N square).
*/

/*
Problem: You are given an array a, size of the array N and an integer x. Print the state of the array after x iterations have been performed.
*/

function selectionSort(){
	var arraySize = parseInt(prompt("Please enter size of the array: "));
	var array = [];

	for(var i = 0; i < arraySize; i++){
		array.push(parseInt(prompt("Enter elements of the array of size " + arraySize)));
	}

	var iteration = parseInt(prompt("Enter a number to find the sorted array until that number of iteration"));

	function search(array, arraySize, iteration){
		var min;
		var temp;
		for (var i = 0; i < arraySize-1; i++) {
			min = i;

			for (var j = i+1; j < arraySize; j++) {
				
				if(array[j] < array[min]){
					temp = array[min];
					array[min] = array[j];
					array[j] = temp;
				}				
			}

			if (i == iteration)
				console.log("Sorted array until the provided number "+ iteration+" number of iterations: "+array);			
		}

		console.log("Final sorted array through Selection Sort: "+array);

	}

	search(array, arraySize, iteration);
}

selectionSort();