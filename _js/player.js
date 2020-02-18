var roleArray = ["Rockerboy", "Solo", "Netrunner", "Tech", "Media", "Lawmen", "Exec", "Fixer", "Nomad"];
var roleInfo = ["Rock and roll rebels who use performance and rhetoric to fight authority.<br>If you live to rock, this is where you belong. As a Rockerboy, you’re one of the street poets, the social conscience, and a rebel of the Age of The Red.", 
				"Assassins, bodyguards, killers, and soldiers for hire in a lawless new world.<br>You were re-born with a gun in your hand—the flesh and blood hand, not the metallic weapons factory that covers most of your other arm.",
				"Cybernetic master hackers of the post–NET world and brain burning secret stealers.",
				"Renegade mechanics and doctors patching up meat and metal alike.",
				"Newsmen, media stars, and social influencers risking it all for the truth.<br>*Not Available",
				"Maximum lawmen patrolling the mean streets and road warrior highways beyond.<br>*Not Available",
				"Corporate power brokers and business raiders fighting to restore the rule of the Megacorps.<br>*Not Available",
				"Deal makers, smugglers, organizers, and information brokers on the post–war streets of the future.",
				"Transportation experts and ultimate road warriors.<br>Years ago, the Corps drove your family off the Farm. They rolled in, took over the land, and put renta-cops all over the place. But that was Before the War."];

var p1RoleChoice;

for (i = 0; i < roleArray.length; i++) {
	document.getElementById("roleChoice").innerHTML += "<p onmouseover='roleInfoChoice(" + i + ")' onclick='p1Role(" + i + ")'>" + (i+1) + ": " + roleArray[i] + " " + "</p>";
}

function p1Role(x) {
	p1RoleChoice = roleArray[x];
	document.getElementById("roleChoice").innerHTML = "You Chose: " + p1RoleChoice;
	window.setTimeout(function() {
		window.location.href = "file:///C:/Users/vanes/Documents/cyberpunk%20red/roles/" + p1RoleChoice + ".html";
	}, 5000);
}

function roleInfoChoice(x) {
	roleMouse = roleInfo[x];
	document.getElementById("roleInfoHover").innerHTML = roleMouse;
}