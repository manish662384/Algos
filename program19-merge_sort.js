/*
Program 19 - Merge Sort

Algo Source: https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
Explanation source: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/tutorial/

Merge sort is a divide-and-conquer algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.

--While comparing two sublists for merging, the first element of both lists is taken into consideration. While sorting in ascending order, the element that is of a lesser value becomes a new element of the sorted list. This procedure is repeated until both the smaller sublists are empty and the new combined sublist comprises all the elements of both the sublists.

At each step a list of size M is being divided into 2 sublists of size M/2, until no further division can be done. To understand better, consider a smaller array A containing the elements (9,7,8).

At the first step this list of size 3 is divided into 2 sublists the first consisting of elements (9,7) and the second one being (8). Now, the first list consisting of elements (9,7) is further divided into 2 sublists consisting of elements (9) and (7) respectively.

As no further breakdown of this list can be done, as each sublist consists of a maximum of 1 element, we now start to merge these lists. The 2 sub-lists formed in the last step are then merged together in sorted order using the procedure mentioned above leading to a new list (7,9) . Backtracking further, we then need to merge the list consisting of element (8) too with this list, leading to the new sorted list (7,8,9).
*/

/*
** Recursion Solution
Sample array: [5,4,3,2,1]
:-
return merge(mergeSort(5,4), mergeSort(3,2,1));
return merge(return merge(mergeSort(5), mergeSort(4)), return merge(mergeSort(3), mergeSort(2,1)))));
return merge(return merge(mergeSort(5), mergeSort(4)), return merge(mergeSort(3), return merge(mergeSort(2), mergeSort(1)));

return merge(return merge([5], [4]), return merge([3], return merge([2], [1]));
return merge([4,5], return merge([3], [1,2]);
return merge([4,5], [1,2,3]);
return [1,2,3,4,5];
*/
function mergeSort(array){

	if(array.length == 1)
		return array;

	var mid = Math.floor(array.length/2);
	var left = array.slice(0, mid);
	var right = array.slice(mid);
	
	return merge(mergeSort(left), mergeSort(right)); // See above ** for Recursion sample under work
}

/*-----Takes two arrays of any length and returns single sorted array by comparing their elements one by one and push the smallest into another array. -------*/
function merge(left, right){

	var resultArray = [];
	var indexLeft = 0;
	var indexRight = 0;

	while(indexLeft < left.length && indexRight < right.length){

		if(left[indexLeft] < right[indexRight]){
			resultArray.push(left[indexLeft]);
			indexLeft++;
		}
		else{
			resultArray.push(right[indexRight]);
			indexRight++;
		}
	}

	return resultArray.concat(left.slice(indexLeft).concat(right.slice(indexRight)));
}

/*- Taking Unsorted array as input from the user - */
var arrayLength = parseInt(prompt("Enter length of Array: "));
var array = [];

for (var i = 0; i < arrayLength; i++) {
	array.push(parseInt(prompt("Enter elements of the array: ")));
}

console.log("Sorted array through Merge Sort: "+ mergeSort(array)); // Final Output

