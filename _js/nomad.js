//Stat Table
var stats = new Array();
stats[0] = new Array(6, 10, 9, 4, 7, 9, 7, 7, 5, 6);
stats[1] = new Array(5, 9, 7, 5, 9, 9, 9, 7, 7, 3);
stats[2] = new Array(6, 8, 8, 4, 7, 8, 8, 5, 7, 4);
stats[3] = new Array(7, 9, 7, 5, 8, 8, 8, 7, 7, 4);
stats[4] = new Array(7, 10, 9, 5, 7, 10, 10, 7, 7, 4);
stats[5] = new Array(6, 8, 9, 6, 8, 7, 8, 7, 5, 3);

var charStat = stats[rollDice(6)-1]; //Roll Dice for Stats

var skills = [
	"Athletics", // (DEX) +4
	"Brawling", // (DEX) +4
	"Concentration", // (WILL) +4
	"Education", // (INT) +2
	"Evasion", // (DEX) +5
	"Driving", //(REF) +7
	"Local Expert", //(INT) +2
	"Marksmanship", // (REF) +5
	"Melee", // (DEX) +6
	"Perception", // (INT) +5
	"Persuasion", // (COOL) +2
	"Tracking" // (INT) +3
];

var Armor = [
	"Heavy Armorjack",
	15, //head
	15 // body
];

var weapons = [
	rollDice(6)*2, //Rippers
	rollDice(6)*5, //Shotgun
	rollDice(6)*4 //Very Heavy Pistol
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
	"Cyberoptic (Low Light): Can see clearly in dim light (faint moonlight, distant street lamps).",
	"Rippers: Three inch carbo-glass claws in your fingers for cutting and stabbing.",
];

var gear = [
	"Agent: A pocket-sized machine which functions as a computer and a phone.",
	"Groundcar: A sedan-style ground card with enough room to hold 6 people."
];

document.getElementById("charStats").innerHTML = "Stats: " + charStat + " HP: " + hp + " Wound Threshold: " + wt + " Death Save: " + ds + "<br>Background: " + background + "<br>You are motivated by " + motivation + ". Your goals are to " + goals
+ "<br>You have " + friendsCount + " friends. " + friends + "<br>You have " + enemiesCount + " enemies." + enemies + "<br>As far as romance is concerned, " + romance + "<br>Personality: " + personality;
