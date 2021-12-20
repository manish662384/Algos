
/*
Program 20 - Quick Sort
Algo Source: https://www.youtube.com/watch?v=3DV8GO9g7B4&t=657s
*/
function swap(A, first, second){
	var temp = A[first];
	A[first] = A[second];
	A[second] = temp;
}

function partition(A, low, high){
	var pivot = A[high];
	var i = low-1;

	for(var j = low; j < high; j++){
		if(A[j] <= pivot){
			i = i+1;
			swap(A, i, j);
		}
	}

	swap(A, i+1, high);
	return i+1;
}

function quickSort(A, low, high){

	if(low < high){
		var pivotIndex = partition(A, low, high);
		quickSort(A, low, pivotIndex-1);
		quickSort(A, pivotIndex+1, high);
	}
	return A;
}

function mainFunc(){
	var arraySize = parseInt(prompt("Enter the size of the array: "));
	var array = [];

	for(var i = 0; i < arraySize; i++){
		array.push(parseInt(prompt("Enter elements of the array of size " + arraySize)));
	}
	/* Calling quicksort and passing the array with first and last index as parameters */
	var sortedArray = quickSort(array, 0, arraySize-1);

	console.log("Sorted Array through Quick sort: " + sortedArray);
}

mainFunc();

//A[6,3,5,1,2,4]