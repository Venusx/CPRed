//lifepath

var backgroundChoice = [
	"Your family lost everything through betrayal.",
	"Your family lost everything through bad management.",
	"Your family was exiled or otherwise driven from their original home/nation/Corporation.",
	"Your family is imprisoned and you alone escaped.",
	"Your family vanished. You are the only remaining member.",
	"Your family was killed and you were the only survivor.",
	"Your family is involved in a long–term conspiracy, organization, or association, such as a crime family or  revolutionary group.",
	"Your family was scattered to the winds due to misfortune.",
	"Your family is cursed with a hereditary feud that has lasted for generations.",
	"You are the inheritor of a family debt; you must honor this debt before moving on with your life."
];

var background = backgroundChoice[rollDice(10) - 1];

var motivationChoice = ["money","honor","your word","honesty","knowledge","vengeance","love","power","having a good time","friendship"];

var motivation = motivationChoice[rollDice(10) - 1];

var goalsChoice = [
	"get rid of a bad reputation.",
	"gain power and control.",
	"get off the street no matter what it takes.",
	"cause pain and suffering to anyone who crosses you.",
	"live down your past life and try to forget it.",
	"hunt down those responsible for your life and make them pay.",
	"get what’s rightfully yours.",
	"save, if possible, anyone else involved in your background.",
	"gain fame and recognition.",
	"become feared and respected."
]

var goals = goalsChoice[rollDice(10) - 1];

//friends

var friendsCount = rollDice(10) - 7;

if (friendsCount < 0){
	friendsCount = 0;
}

var friends = new Array(friendsCount);

for (i = 0; i < friendsCount; i++){
	var roll = rollDice(10)-1;
	var friendPersona = [
		" Like an older sibling to you",
		" Like a younger sibling to you",
		" A teacher or mentor",
		" A partner or coworker",
		" A former lover",
		" An old enemy",
		" Like a parent to you",
		" An old childhood friend",
		" A relative",
		" Someone with a common interest"
	];
	friends[i] = friendPersona[roll];
}

//enemies

var enemiesCount = rollDice(10) - 5;

if (enemiesCount < 0){
	enemiesCount = 0;
}

var enemies = new Array(enemiesCount);

for (i = 0; i < enemiesCount; i++){
	var roll = rollDice(10)-1;
	var enemiesPersona = [
		" Ex–friend",
		" Ex–lover",
		" Relative",
		" Childhood enemy",
		" Person working for you",
		" Person you work for",
		" Partner or coworker",
		" Booster gang member",
		" Corporate Exec",
		" Government official"
	];
	enemies[i] = enemiesPersona[roll];
}

//Romance

var romanceChoice = [
	"Your lover died in an accident.",
	"Your lover mysteriously vanished.",
	"It just didn’t work out.",
	"A personal goal or vendetta came between you and your lover.",
	"Your lover was kidnapped.",
	"Your lover went insane",
	"Your lover committed suicide.",
	"Your lover was killed in a fight.",
	"A rival cut you out of the action.",
	"Your lover is imprisoned or exiled."
]

var romance = romanceChoice[rollDice(10) - 1];

//Personality

var personalityChoice = [
	"Shy and secretive",
	"Rebellious, antisocial, violent",
	"Arrogant, proud and aloof",
	"Moody, rash and headstrong",
	"Picky, fussy, and nervous",
	"Stable and serious",
	"Silly and fluff–headed",
	"Sneaky and deceptive",
	"Intellectual and detached",
	"Friendly and outgoing"
]

var personality = personalityChoice[rollDice(10) - 1];