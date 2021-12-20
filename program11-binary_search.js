/*
//Program 11 - Binary Search
Source: https://www.hackerearth.com/practice/algorithms/searching/binary-search/tutorial/

You have been given an array A consisting of N integers. All the elements in this array A are unique. You have to answer some queries based on the elements of this array. Each query will consist of a single integer x. You need to print the rank based position of this element in this array considering that the array is 1 indexed. The rank based position of an element in an array is its position in the array when the array has been sorted in ascending order.

Note: It is guaranteed that all the elements in this array are unique and for each x belonging to a query, value x shall exist in the array

Input Format

The first line consists of a single integer N denoting the size of array A. The next line contains N unique integers, denoting the content of array A. The next line contains a single integer q denoting the number of queries. Each of the next q lines contains a single integer x denoting the element whose rank based position needs to be printed.

Output Format

You need to print q integers denoting the answer to each query.

I/P: 
5
1 2 3 4 5
5
1
2
3
4
5

O/P:
1
2
3
4
5
*/

/*
//Solution 1: Mine
*/

function binarySearch(){
	var sizeArray = parseInt(prompt("This is a Binary Search program. Enter the size of the array: "));
	var array = [];

	for(var i=0; i<sizeArray; i++){
		array.push(parseInt(prompt("Enter the elements of the array: ")));
	}

	var key = parseInt(prompt("Enter an element to find its index position in the array. Will return -1 if it does not contain: "));

	function search(low, high, key){		

		while(low <= high){
			var mid = Math.floor((low+high)/2);
			//console.log(mid);

			if(array[mid] < key)
				low = mid+1;
			else if(array[mid] > key)
				high = mid-1;
			else
				return mid;
		}
		return -1;
	}

	var indexValue = search(0, sizeArray-1, key);

	alert("Index Value of the element is: "+ indexValue);
}

binarySearch();

