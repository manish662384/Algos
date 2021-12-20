/*
//Program 10	-	Manna's First Name
Source: https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/mannas-first-name-4/

Problem: 
Manna is extremely disappointed to find out that no one in his college knows his first name. Even his classmates call him 
only by his last name. Frustrated, he decides to make his fellow college students know his first name by forcing them to 
solve this question.

You are given a long string as input in each testcase, containing any ASCII character. Your task is to find out the number 
of times SUVO and SUVOJIT appears in it.

Note: This problem must be solved in C language only.

Input Format
The first line contains the number of testcases, T. Next, T lines follow each containing a long string S.

Output Format
For each long string S, display the no. of times SUVO and SUVOJIT appears in it.

I/P:
SUVOJITSU
651SUVOMN
$$$$$SUVOSUVOJIT$$$$$

O/P:
SUVO = 0, SUVOJIT = 1
SUVO = 1, SUVOJIT = 0
SUVO = 1, SUVOJIT = 1
*/


//Solution 1: Mine
function nameCheck(){
	var name = prompt("Enter a string to find out number of times SUVO and SUVOJIT appears in it: ").toLowerCase();
	var suvoCount = 0;
	var suvojitCount = 0;

	for(var i=0; i<name.length; i++){

		if(name.charAt(i) == 's' && name.charAt(i+4) != 'j'){
			var suvoName = name.substring(i, i+4);
			if(suvoName === "suvo")
				suvoCount++;
		}	else if(name.charAt(i) == 's' && name.charAt(i+6) == 't'){

				var suvojitName = name.substring(i, i+7);
				if(suvojitName === "suvojit")
					suvojitCount++;
		}
	}

	console.log("suvo: "+ suvoCount + ", suvojit: " + suvojitCount);
}

nameCheck();


