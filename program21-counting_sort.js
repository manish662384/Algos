/*
Program 21: Counting Sort

Counting sort is useful when the range of values each item can take is very small.

For example, you can use it if you want to sort 10,000 people according to their age.  We can safely assume (for now) that no human is older than 199 years old, so the range of values is very small in this case.
*/

//Source: https://www.hackerearth.com/practice/algorithms/sorting/counting-sort/tutorial/
/*Following video helped, though it's slightly different:
https://www.youtube.com/watch?v=7zuGmKfUt7s*/

function maxNo(max, array){
	console.log(max, array);

	max = array[0];

	for (var i = 1; i < array.length; i++) {
		if(array[i] > array[i-1])
			max = array[i];
	}

	return max;
}

function countingSort(){	
	var arrayLength = parseInt(prompt("Enter length of array:"));

	var array = [];
	for (var i = 0; i < arrayLength; i++) {
		array.push(parseInt(prompt("Enter elements of the array of size "+ arrayLength +":")));
	}

	var max = 0;
	max = maxNo(max, array);
	//console.log(max);

	var auxArray = [];
	while(max >= 0){
		auxArray.push(0);
		max--;
	}
	//console.log(auxArray);

	for (var i = 0; i < array.length; i++) {
		auxArray[array[i]]++ ;
	}

	//console.log(auxArray);

	var sortedArray = [];

	for (var i = 0; i < auxArray.length; i++) {
		var temp = auxArray[i];

		while(temp--){
			sortedArray.push(i);
		}
	}

	console.log(sortedArray);
}

countingSort();