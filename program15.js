/*
//Program 15 - Easy Going (Using Bubble Sort)

You have given an array of size N and an integer M.
Your task is to calculate the difference between maximum sum and minimum sum of N-M elements of the given array.

Explanation
M is 1 and N is 5 so you have to calculate maximum and minimum sum using (5-1 =) 4 elements.
Maximum sum using the 4 elements would be (2+3+4+5=)14. 
Minimum sum using the 4 elements would be (1+2+3+4=)10. 
Difference will be 14-10=4.
*/

function easyGoing(){
	var arraySize = parseInt(prompt("Enter size of the array: "));
	var number = parseInt(prompt("Enter a number smaller than array size:"));
	var array = [];
	var temp;
	var maxSum = 0;
	var minSum = 0;

	/* -----Forming e;lements of array------- */
	for (var i = 0; i < arraySize; i++) {
		array.push(parseInt(prompt("Enter elements of the array of size "+ arraySize +": ")));
	}

	/* -----Sorting array in increasing order------- */
	for (var i = 0; i < arraySize; i++) {
		for (var j = 0; j < arraySize-i-1; j++) {
			if (array[j] > array[j+1]) {
				temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}

	/* ------Finding min sum of arraysize-number elements------ */
	for (var i = 0; i < arraySize-number; i++) {
		minSum += array[i];		
	}

	/* ------Finding max Sum of arraysize-number elements */
	for (var i = number; i < arraySize; i++) {
		maxSum += array[i];
	}

	var result = maxSum - minSum;

	console.log("Difference between max sum: "+maxSum+" and min sum: "+minSum+" of (array size-your given number) elements of the array = "+ result);
}

easyGoing();