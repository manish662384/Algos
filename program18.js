/*
Program 18 - The rise of the wierd things.. (Using Insertion sort and filter() method)

Explanation:

Bangalore City, where peace prevails most of the time. Not everyone is a huge fan of peace, though. Certainly not Mr. XYZ, whose identity is not known to us - yet. Mr. XYZ has somehow managed to bring vampires and zombies to Bangalore City to attack and destroy the city.

Fatal Eagle, an ordinary citizen of the city is extremely worried on seeing his city being attacked by these weird creatures. But, as of now, he has no power to stop these creatures from their silent attacks. He wants to analyze these creatures firstly. He figured out some things about these creatures, like:

Zombies have power in terms of an EVEN number.
Vampires have power in terms of an ODD number.
If he sees a zombie or a vampire, he marks them in his list with their power. After generating the entire list of power of these creatures, he decides to arrange this data in the following manner:

All the zombies arranged in sorted manner of their power, followed by the total power of zombies.
All the vampires arranged in sorted manner of their power, followed by the total power of vampires.
You've to help him produce the following list to help him save his city.

Input constraints:
The first line of input will contain an integer — N, denoting the number of creatures. The next line will contain N integers denoting the elements of the list containing the power of zombies and vampires.

Output constraints:
Print the required list in a single line.

Constraints:
1 ≤ N ≤ 103
1 ≤ Ni ≤ 103
*/


function creatures(){
	var arraySize = parseInt(prompt("Enter the total number of creatures: "));
	var creaturesList = [];
	var zombiesPower = [];
	var vampiresPower = [];

	for (var i = 0; i < arraySize; i++) {
		creaturesList.push(parseInt(prompt("Enter the powers of zombies and vampires: ")));		
	}

	/*- Filtering list of zombies and the vampires. Zombies have even number of powers and vampires have odd numbers. -*/
	/*for (var i = 0; i < arraySize; i++) {
		if (creaturesList[i] % 2 == 0)
			zombiesPower.push(creaturesList[i]);
		else
			vampiresPower.push(creaturesList[i]);		
	}*/

	// Filtering using filter()
	zombiesPower = creaturesList.filter(power => power % 2 == 0);
	vampiresPower = creaturesList.filter(power => power % 2 != 0);
		

	/* Sorting the list of powers of creatures through Insertion Sort */
	function sortPowers(creaturePowers){
		for (var i = 0; i < creaturePowers.length; i++) {
			var temp = creaturePowers[i];
			var j = i;

			while (j > 0 && temp < creaturePowers[j-1]) {
				creaturePowers[j] = creaturePowers[j-1];
				j = j-1;
			}

			creaturePowers[j] = temp;
		}
		return creaturePowers;	
	}

	var sortedZombiesPower = sortPowers(zombiesPower); // Calling method to sort the powers of zombies.
	var sortedVampiresPower = sortPowers(vampiresPower); // Calling method to sort the powers of vampires.

	var zombiesPowerSum = 0;
	var vampiresPowerSum = 0;

	/*  Sum of powers of Zombies */
	for (var i = 0; i < sortedZombiesPower.length; i++) {
		zombiesPowerSum += sortedZombiesPower[i];
	}
	sortedZombiesPower.push(zombiesPowerSum);

	/* Sum of powers of Vampires */
	for (var i = 0; i < sortedVampiresPower.length; i++) {
		vampiresPowerSum += sortedVampiresPower[i];
	}
	sortedVampiresPower.push(vampiresPowerSum);

	console.log("Sorted list of Zombies with their powers and its Sum: "+sortedZombiesPower);
	console.log("Sorted list of Vampires with their powers and its Sum: "+sortedVampiresPower);

	var finalCreaturesList = sortedZombiesPower.concat(sortedVampiresPower); // Concatenating both the final list of creatures.


	console.log("Final sorted list of zombies and vampires with their powers and their respective sum: "+ finalCreaturesList)	

}

/* Calling main creatures function */
creatures();