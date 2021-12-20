/* 
//Program 12	-	Compare Strings
Source: https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/compare-strings-1-1cb66e03/

Problem:
You have been given two strings, A and B (of length N each) and Q queries.
The strings contain only 0s and/or 1s.

For every query, you are given an index i. You have to update the value at index i to 1 in string B
 and check if B is lexicographically equal to or larger than A or not.
If yes, then print "YES" and if not, print "NO" (without quotes).

Input format

First line contains two space-separated integers N and Q.
Next line contains the string A.
Next line contains the string B.
Next Q lines contains an integer i (1 - based indexing)
Output Format

For each query, print the desired output in a new line.

I/P:
5 5
11111
00010
1
2
3
4
5

O/P:
NO
NO
NO
NO
YES

Explanation:
After 1st query: B = 10010. B < A. (NO)
After 2nd query: B = 11010. B < A. (NO)
After 3rd query: B = 11110. B < A. (NO)
After 4th query: B = 11110. B < A. (NO)
After 5th query: B = 11111. B = A. (YES)
 */

/*
// Solution 1: Mine
*/

function compareStrings(){
	let stringLength = prompt("Enter length of the string: ");
	let queries = prompt("Enter number of queries: ");
	let stringA = prompt("Enter string A: ");
	let stringB = prompt("Enter string B: ");
	let result = [];

	for(let i=0; i<queries; i++){
		let indexNo = parseInt(prompt("Enter index number to replace in String B with '1' and compare it with string A. It will return \"YES\" if String 'A' and String 'B' matches and \"NO\" if it doesn't."));
		if(stringB.charAt(indexNo) != '1')
			stringB = stringB.replace(stringB.charAt(indexNo), '1');

		console.log(stringB);
		
		if(stringB === stringA)
			result.push("YES");
		else
			result.push("NO");
	}

	return console.log(result);
}

compareStrings();

// 11111
//00010