/*
//Program 9: Monk Takes a Walk
Source: https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/monk-takes-a-walk/

Today, Monk went for a walk in a garden. There are many trees in the garden and each tree has an English alphabet on it. While Monk was walking, he noticed that all trees with vowels on it are not in good state. He decided to take care of them. So, he asked you to tell him the count of such trees in the garden. 
Note : The following letters are vowels: 'A', 'E', 'I', 'O', 'U' ,'a','e','i','o' and 'u'.

Input:
The first line consists of an integer T denoting the number of test cases.
Each test case consists of only one string, each character of string denoting the alphabet (may be lowercase or uppercase) on a tree in the garden.

Output:
For each test case, print the count in a new line.

E.g,
I/P: nBBZLaosnm, O/P: 2			//count of vowels
I/P: JHkIsnZtTL, O/P: 1
*/

// Solution 1: Mine
function vowelCount(){
	var string = prompt("Enter a string to find out the count of Vowels: ");
	var count = 0;
	var index = [];
	var vowels = [];

	//console.log(string.length);

	for(var i=0; i<string.length; i++){

		switch(string.charAt(i)){
			case 'A':
			case 'E':
			case 'I':
			case 'O':
			case 'U':
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
				count++;
				vowels.push(string[i]);
				index.push(i);
				break;
		}
	}

	return alert("Vowels: "+ vowels +". Count of Vowels: "+ count + "" + ", at Index number: "+ index);
}

vowelCount();