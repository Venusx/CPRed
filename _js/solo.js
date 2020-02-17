//Stat Table
var stats = new Array();
stats[0] = new Array(5, 8, 5, 4, 9, 8, 6, 6, 10, 6);
stats[1] = new Array(5, 10, 6, 3, 9, 10, 6, 6, 10, 4);
stats[2] = new Array(6, 10, 5, 3, 9, 10, 7, 5, 8, 5);
stats[3] = new Array(6, 9, 5, 6, 9, 9, 5, 6, 8, 4);
stats[4] = new Array(5, 10, 6, 3, 10, 10, 6, 6, 8, 4);
stats[5] = new Array(6, 10, 7, 4, 8, 10, 5, 7, 9, 5);

var charStat = stats[rollDice(6)-1]; //Roll Dice for Stats

var skills = [
	"Athletics", // (DEX) +5
	"Brawling", // (DEX) +4
	"Concentration", // (WILL) +4
	"Education", // (INT) +2
	"Evasion", // (DEX) +5
	"Interrogation", //(COOL) +3
	"Local Expert", //(INT) +3
	"Marksmanship", // (REF) +6
	"Melee", // (DEX) +5
	"Perception", // (INT) +5
	"Persuasion", // (COOL) +2
	"Stealth" // (Dex) +3
];

var Armor = [
	"Heavy Armorjack",
	15, //head
	15 // body
];

var weapons = [
	rollDice(6)*5, //Assault Rifle
	rollDice(6), //Cyberarm
	rollDice(6), //knife
	rollDice(6)*2 //Rippers
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
	"Cyberoptic (Targeting): A built in targeting sight allows you to add +1  to Marksmanship",
	"Cyberarm w/ Rippers: Rippers concealed in a cyberarm.",
	"Cyberleg w/ Jump Boosters: You can leap 6 m/yds straight up, or make a running jump of up to 8 m/yds."
];

var gear = [
	"Agent: A pocket-sized machine which functions as a computer and a phone.",
];

document.getElementById("charStats").innerHTML = "Stats: " + charStat + " HP: " + hp + " Wound Threshold: " + wt + " Death Save: " + ds + "<br>Background: " + background + "<br>You are motivated by " + motivation + ". Your goals are to " + goals
+ "<br>You have " + friendsCount + " friends. " + friends + "<br>You have " + enemiesCount + " enemies." + enemies + "<br>As far as romance is concerned, " + romance + "<br>Personality: " + personality;
