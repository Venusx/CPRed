//dice

function rollDice(i) {
	var randomDice = Math.floor(Math.random() * i) + 1;
	return randomDice;
}

//check if even

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

//age Roll 2d6+16

const age = (rollDice(6) * 2) + 16;

//things
var euroDollars = 0;
var corpFavors = 0;
var ptsd = false;
var prison = 0;

//Game types and character stats

var charStats = new Array(9);

for (var i = 0; i <= charStats.length; i++){
	charStats[i] = rollDice(10);
	if (charStats[i] <= 2) {
		i = i - 1;
	}
	if (i == 8) {
		break;
	}
}

var randomPlay = rollDice(10) * 9; //Random Play Option
console.log("Random Play: " + randomPlay + " points.");

var cinematicPlay = { //Cinematic play, starts off with this many points instead of rolling
	vEasy: 80,
	easy: 75,
	normal: 70,
	hard: 60,
	vHard: 50,
}

var stats = {
	int: charStats[0],
	ref: charStats[1],
	cool: charStats[2],
	tech: charStats[3],
	sexy: charStats[4],
	ma: charStats[5],
	emp: charStats[6],
	bt: charStats[7],
	luck: charStats[8],
} 

if (stats.bt == 2) { //calculate body type
	var strength = "Very weak";
} else if (stats.bt == 3 || stats.bt == 4) {
	var strength = "Weak";
} else if (stats.bt > 4 && stats.bt < 8){
	var strength = "Average";
} else if (stats.bt > 7 && stats.bt < 10){
	var strength = "Strong";
} else if (stats.bt == 10){
	var strength = "Very strong";
}

var carry = stats.bt * 10; //in kg
var lift = stats.bt *40; //dead lift in kg
var run = stats.ma * 3; //10 seconds in meters
var leap = run/4; //from running start in meters
var humanity = stats.emp * 10; //for every 10 loss of humanity, lose 1 emp

//Dress and Personal style

var dressRoll = new Array(3);

for (var i = 0; i <= dressRoll.length; i++){
	dressRoll[i] = rollDice(10);
	if (i == 2) {
		break;
	}
}

var clothes = ["Leather", "Jeans", "Corporate Dress", "Jumpsuit", "Mini Skirt", "High Fashion", "Camo", "Normal Clothes", "Nude", "Bag Lady"];
var randClothes = clothes[Math.floor(Math.random()*clothes.length)];

var hair = ["MoHawk", "Unkept", "Short and Spiky", "Wild and all over", "Bald", "Striped", "Tinted", "Neat Short", "Short, Curly", "Long, Straight"];
var randHair = hair[Math.floor(Math.random()*hair.length)];

var extras = ["Tattoos", "Mirror Shades", "Ritual Scars", "Spiked Gloves", "Nose Ring", "Earrings", "Long Fingernails", "Spiked Heeled Boots", "Weird Contact Lenses", "Fingerless Gloves"];
var randExtra = extras[Math.floor(Math.random()*extras.length)];

var dress = {
	clothes: randClothes,
	hair: randHair,
	extras: randExtra,
}

//Ethnicity

var ethnicityArray = ["British", "African", "Japanese", "Russian", "Indonesian", "Chinese", "African American", "Hispanic American", "Portuguese", "French"];
var ethnicity = ethnicityArray[Math.floor(Math.random()*ethnicityArray.length)];

//FAMILY
//Family Ranking

var famRankArray = ["Corporate Executive", "Corporate Manager", "Corporate Technician", "Nomad Pack", "Pirate Fleet", "Gang Family", "Crime lord", "Combat Zone Poor", "Urban Homeless", "Arcology Family"];
var famRank = famRankArray[Math.floor(Math.random()*famRankArray.length)];

//Parents alive?
parentsAlive = rollDice(10);
familyDanger = rollDice(10);
familyStatus = "";

var childhoodArray = [
"spent on the street with no adult supervision. ",
"spent in a safe corporate suburbia. ",
"spent in a Nomad Pack moving town to town. ",
"spent in a decaying, once upscale neighborhood. ",
"spent in a defended Corporate Zone in the central city. ",
"spent in the heart of the Combat Zone. ",
"spent in a small village or town far from the city. ",
"spent in a large arcology city. ",
"spent in an aquatic Pirate Pack. ",
"spent on a Corporate controlled Farm or Research Facility. "];
var childhood = childhoodArray[Math.floor(Math.random()*childhoodArray.length)];

if (parentsAlive <= 6) {
	parentsAlive = true;
	parentsLore = "Your parents are alive. ";
	} else {
	parentsAlive = false;
	var parentsLoreArray = [
	"Your parents died in warfare. ",
	"Your parents died in an accident. ",
	"Your parents were murdered. ",
	"Your parents have amnesia and don't remember you. ",
	"You never knew your parents. ",
	"Your parents are in hiding to protect you. ",
	"You were left with relatives for safekeeping. ",
	"You grew up on the street and never knew your parents. ",
	"You were given up for adoption. ",
	"Your parents sold you for money. "];
	var parentsLore = parentsLoreArray[Math.floor(Math.random()*parentsLoreArray.length)];
}

if (familyDanger <= 6) {
	familyDanger = true;
	var famTragedyArray = [
	"have lost everything through betrayal. ",
	"have lost everything through bad management. ",
	"have been exiled or otherwise driven from their original home/nation/corporation. ",
	"are imprisoned. You alone escaped. ",
	"have vanished. You are the only remaining member. ",
	"were murdered/killed. You were the only survivor. ",
	"are involved in a longterm conspiracy, organization or association, such as a crime family or revolutionary group.",
	"were scattered to the winds due to misfortune.",
	"have been cursed with a hereditary feud that has lasted for generations.",
	"you are the inheritor of a family debt; you must honor this debt before moving on with your life."];
	var famTragedy = "Your family is in danger and " + famTragedyArray[Math.floor(Math.random()*famTragedyArray.length)];
	} else {
	familyDanger = false;
	famTragedy = "Your family is doing ok. ";
}

familyStatus = famTragedy + " Your childhood was " + childhood;

//siblings
//up to 7 brothers/sisters

var siblings = rollDice(10);
var brothers = 0;
var sisters = 0;

if (siblings > 7) {
	siblings = 0;
} 

// var this.["sib" * siblings];

// console.log(string.match(sib));

for (i = 0; i < siblings; i++) {
	roll = rollDice(10);
	if (isEven(roll)) {
		brothers = brothers + 1;
	} else {
		sisters = sisters + 1;
	}
}

// for (i = 0; i < siblings; i++) {
// 	var sib = rollDice(10) * 3;
//     this["siblingsArray" + i ] = {age: sib};
//     console.log();
// } testing for making arrays

//Lifepath pg 36 (personality, favorite person, What do you value most?, How do you feel about most people? Most valued possesion)

var lifepathArray = [rollDice(10),  rollDice(10), rollDice(10), rollDice(10), rollDice(10)];

//personality

if (Number.isInteger(lifepathArray[0])) {
	var personalityArray = [
	"shy and Secretive",
	"rebellious, anti-social, and violent",
	"arrogant, proud, and aloof",
	"moody, rash, and headstrong",
	"picky, fussy, and nervous",
	"stable and serious",
	"silly and fluffheaded",
	"sneaky and deceptive",
	"intellectual and detached",
	"friendly and outgoing"];
	lifepathArray[0] = personalityArray[Math.floor(Math.random()*personalityArray.length)];
	}

if (Number.isInteger(lifepathArray[1])) {
	var favPersonArray = [
	"your parents",
	"a close family member",
	"your lover",
	"a friend",
	"yourself",
	"your pet",
	"your mentor",
	"a certain public figure",
	"a personal hero",
	"no one at all. Not even yourself"];
	lifepathArray[1] = favPersonArray[Math.floor(Math.random()*favPersonArray.length)];
	}

if (Number.isInteger(lifepathArray[2])) {
	var mostValuedArray = [
	"money",
	"honor",
	"your word",
	"honesty",
	"knowledge",
	"vengeance",
	"love",
	"power",
	"having a good time",
	"friendship"];
	lifepathArray[2] = mostValuedArray[Math.floor(Math.random()*mostValuedArray.length)];
	}

if (Number.isInteger(lifepathArray[3])) {
	var mostValuedArray = [
	"are neutral towards people",
	"are neutral towards people",
	"like most everyone",
	"hate most everyone",
	"think people are tools. You use them for your own goals and then discard them",
	"think every person is a valuable individual",
	"believe people are obstacles to be destroyed if they cross you",
	"think people are untrustworthy. You depend on no one",
	"believe they should be all wiped out and replaced with cockroches",
	"believe that people are wonderful"];
	lifepathArray[3] = mostValuedArray[Math.floor(Math.random()*mostValuedArray.length)];
	}

if (Number.isInteger(lifepathArray[4])) {
	var valuedItem = [
	"weapons",
	"tools",
	"clothing",
	"photographs",
	"books",
	"recordings",
	"musical instrument",
	"jewelry",
	"toys",
	"letters"];
	lifepathArray[4] = valuedItem[Math.floor(Math.random()*valuedItem.length)];
	}

//Disaster Strikes d10 pg 37

//left side
document.getElementById("statsheet").innerHTML = "<ul><li><p class='bold'>Intelligence:</p> " + stats.int + "</li><li><p class='bold'>Reflex:</p> " + stats.ref + "</li><li><p class='bold'>Coolness:</p> " + stats.cool + "</li><li><p class='bold'>Tech:</p> " + stats.tech + "</li><li><p class='bold'>Attractiveness:</p> " + stats.sexy + "</li><li><p class='bold'>Movement Allowance:</p> " + stats.ma + "</li><li><p class='bold'>Empathy:</p> " + stats.emp + "</li><li><p class='bold'>Body Type:</p> " + stats.bt + " (" + strength + ")" + "</li><li><p class='bold'>Luck:</p> " + stats.luck;
document.getElementById("secondarystat").innerHTML = "<ul><li><p class='bold'>Carry:</p> " + carry + " <p class='bold'>Lift:</p> " + lift + "</li><li><p class='bold'>Run:</p> " + run + " <p class='bold'>Leap:</p> " + leap + "</li><li><p class='bold'>Humanity:</p> " + humanity + "</li></ul>";
document.getElementById("age").innerHTML = "<p class='bold'>Age:</p> " + age;
document.getElementById("eurodollars").innerHTML = "<p class='bold'>Eurodollars:</p> " + euroDollars;
document.getElementById("corpFavors").innerHTML = "<p class='bold'>Favors:</p> " + corpFavors;
document.getElementById("dress").innerHTML = "<ul><li><p class='bold'> Clothing:</p> " + dress.clothes + "</li><li><p class='bold'> Hair:</p> " + dress.hair + "</li><li><p class='bold'> Accessories:</p> " + dress.extras + "</li></ul>";
document.getElementById("ethnicity").innerHTML = "<p class='bold'>Ethnicity:</p> " + ethnicity;

//right side

document.getElementById("family").innerHTML = "<ul><li><p class='bold'>Family Rank:</p> " + famRank + "</li><li><p class='bold'>Parents Alive:</p> " + parentsAlive + "</li><li><p class='bold'>Family in danger:</p> " + familyDanger + "</li></ul>";
if (siblings == 0) {document.getElementById("lore").innerHTML = "<p>" + parentsLore + "</p>" + "<p>" + familyStatus + "</p>" + "<p>" + "You have " + siblings + " siblings. " + "</p>";}
else if (siblings == 1) {document.getElementById("lore").innerHTML = "<p>" + parentsLore + "</p>" + "<p>" + familyStatus + "</p>" + "<p>" + "You have " + siblings + " siblings. " + brothers + " brother and " + sisters + " sister." + "</p>";}
else {document.getElementById("lore").innerHTML = "<p>" + parentsLore + "</p>" + "<p>" + familyStatus + "</p>" + "<p>" + "You have " + siblings + " siblings, " + brothers + " brothers and " + sisters + " sisters." + "</p>";}

document.getElementById("lifepath").innerHTML = "<p>You are a very " + lifepathArray[0] + " person that looks up to and holds high the opinion of " + lifepathArray[1] + ".</p><p> You value " + lifepathArray[2] + " and your " + lifepathArray[4] + ".</p><p> You " + lifepathArray[3] + ".</p>";
// document.getElementById("lifeyears").innerHTML = lifeEventsArray;