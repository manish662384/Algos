/*
Program 17 - Insertion Sort

Insertion sort is based on the idea that one element from the input elements is consumed in each iteration to find its correct position i.e, the position to which it belongs in a sorted array.

It iterates the input elements by growing the sorted array at each iteration. It compares the current element with the largest value in the sorted array. If the current element is greater, then it leaves the element in its place and moves on to the next element else it finds its correct position in the sorted array and moves it to that position. This is done by shifting all the elements, which are larger than the current element, in the sorted array to one position ahead

Time Complexity:

In worst case,each element is compared with all the other elements in the sorted array. For N elements, there will be  N(square) comparisons. Therefore, the time complexity is O(N(square))
*/

function insertionSort(){
	var arraySize = parseInt(prompt("Enter the size of the array: "));
	var array = [];
	var temp;

	/*--forming the array from user input*/
	for (var i = 0; i < arraySize; i++) {
		array.push(parseInt(prompt("Enter elements of the array of size "+ arraySize)));		
	}


	for (var i = 0; i < arraySize; i++) {
		temp = array[i];
		var j = i;

		while(j > 0 && temp < array[j-1]){
			array[j] = array[j-1];
			j = j-1;
		}
		array[j] = temp;		
	}

	console.log("Sorted array through Insertion Sort: "+ array);
}

insertionSort();