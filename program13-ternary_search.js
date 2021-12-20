/*  
//Problem 13 - Ternary Search.
Like linear search and binary search, ternary search is a searching technique that is used to determine the position of a specific value in an array. In binary search, the sorted array is divided into two parts while in ternary search, it is divided into 3 parts and then you determine in which part the element exists.

Ternary search, like binary search, is a divide-and-conquer algorithm. It is mandatory for the array (in which you will search for an element) to be sorted before you begin the search. In this search, after each iteration it neglects 
1/3 part of the array and repeats the same operations on the remaining 2/3


Let us consider the following example to understand the code.

Let the sorted array be ar[] = {2,3,5,6,8,9,12,13,14} with indices from 0 to 8. You are required to find the position of  x=13 in this array. Divide the sorted array into the following 3 parts by evaluating the values of mid1 and mid2:
- {2,3,5}
- {6,8,9}
- {12,13,14}

Here ar[mid1] = 5 and ar[mid2] = 12 . As 13 is not equal to ar[mid1] and ar[mid2] and it is also not smaller than ar[mid1] , you can safely assume that it lies in the 3rd part of the array as it is greater than ar[mid2].

Run the ternary search again with l = 7 and r = 8.

Now, ar[mid1] = ar[7] = 13 and ar[mid2] = ar[8] = 14.

As ar[mid1] = x, mid1 is the required answer.

If the value is not in the array, it returns -1 as the answer.

Complexity:
 O(log(base 3)N) , where N is the size of the array
*/

/*
//Problem 1
*/

function ternarySearch(){
	var list = [];

	for(var i=0; i<5; i++){
		list.push(parseInt(prompt("Enter 5 numbers to form a list: ")));
	}

	var number = parseInt(prompt("Enter a number to find it's index number in the list otherwise will return -1: "));

	function search(low, high, number){
		
		while(low<=high){
			var mid1 = Math.floor(low + (high-low)/3);
			var mid2 = Math.floor(high - (high-low)/3);

			if(number == list[mid1])
				return mid1;
			else if(number == list[mid2])
				return mid2;
			else if(number < list[mid1])
				return search(low, mid1-1, number);	//high = mid1-1;
			else if(number > list[mid2])
				return search(mid2+1, high, number);	//low = mid2+1;
			else
				return search(mid1+1, mid2-1, number);	//low = mid1+1;	high = mid2-1;
		}

		return -1;
	}

	console.log(search(0, list.length-1, number));
}

ternarySearch();