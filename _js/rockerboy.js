//Stat Table INT REF DEX TECH COOL WILL LUCK MOVE BODY EMP
var stats = new Array();
stats[0] = new Array(5, 8, 5, 4, 9, 8, 6, 6, 10, 6);
stats[1] = new Array(5, 10, 6, 3, 9, 10, 6, 6, 10, 4);
stats[2] = new Array(6, 10, 5, 3, 9, 10, 7, 5, 8, 5);
stats[3] = new Array(6, 9, 5, 6, 9, 9, 5, 6, 8, 4);
stats[4] = new Array(5, 10, 6, 3, 10, 10, 6, 6, 8, 4);
stats[5] = new Array(6, 10, 7, 4, 8, 10, 5, 7, 9, 5);

var charStat = stats[rollDice(6)-1]; //Roll Dice for Stats

console.log('charStat before skill addition: ' + charStat);

var skills = {
	Athletics: charStat[2] = charStat[2] + 3, // (DEX) +3
	Brawling: charStat[2] = charStat[2] + 2, // (DEX) +2
	Concentration: charStat[5] = charStat[5] + 4, // (WILL) +4
	/*"Education", // (INT) +2
	"Evasion", // (DEX) +5
	"Human", // Perception (EMP) +5
	"Local", // Expert (INT) +5
	"Marksmanship", // (REF) +4
	"Melee", // (DEX) +3
	"Perception", // (INT) +3
	"Persuasion", // (COOL) +6
	"Instrument" // (EMP) +6*/
};

console.log(Object.getOwnPropertyNames(skills));

var gear = [
	weapon[8], //Slice and Dice
	weapon[9], // Very Heavy Pistol
	armor[1] // Kevlar
];

var hp, //Hit Points, Wound Threshold, Death Save
	wt,
	ds;

if (charStat[8] == 8) {
	hp = 40;
	wt = 20;
	ds = 8;
} else if (charStat[8] == 9) {
	hp = 45;
	wt = 23;
	ds = 9;
}  else {
	hp = 50;
	wt = 25;
	ds = 10;
}

var cyberware = [
	"Cyberaudio(Amped Hearing): Adds +1 to any sound-related task check.",
	"Slice & Dice: Mono-filament wire mounted in one finger. Cuts through  any organic material or plastics. Can be used as a garrote, cutter, or slicewhip."
];

var gear = [
	"Agent: A pocket-sized machine which functions as a computer and a phone.",
	"Guitar: Forty’s instrument of choice and most prized possession."
];

document.getElementById("charStats").innerHTML = "Stats: " + charStat + " HP: " + hp + " Wound Threshold: " + wt + " Death Save: " + ds + "<br>Background: " + background + "<br>You are motivated by " + motivation + ". Your goals are to " + goals
+ "<br>You have " + friendsCount + " friends. " + friends + "<br>You have " + enemiesCount + " enemies." + enemies + "<br>As far as romance is concerned, " + romance + "<br>Personality: " + personality;

