var roleArray = ["Rockerboy", "Solo", "Netrunner", "Tech", "Media", "Lawmen", "Exec", "Fixer", "Nomad"];
var roleInfo = ["<p>Rock and roll rebels who use performance and rhetoric to fight authority.<br></p><p>If you live to rock, this is where you belong. As a Rockerboy, you’re one of the street poets, the social conscience, and a rebel of the Age of The Red.</p>", 
				"<p>Assassins, bodyguards, killers, and soldiers for hire in a lawless new world.<br></p><p>You were re-born with a gun in your hand—the flesh and blood hand, not the metallic weapons factory that covers most of your other arm.</p>",
				"<p>Cybernetic master hackers of the post–NET world and brain burning secret stealers.</p>",
				"<p>Renegade mechanics and doctors patching up meat and metal alike.</p>",
				"<p>Newsmen, media stars, and social influencers risking it all for the truth.<br></p><p>*Not Available</p>",
				"<p>Maximum lawmen patrolling the mean streets and road warrior highways beyond.<br></p><p>*Not Available</p>",
				"<p>Corporate power brokers and business raiders fighting to restore the rule of the Megacorps.<br></p><p>*Not Available</p>",
				"<p>Deal makers, smugglers, organizers, and information brokers on the post–war streets of the future.</p>",
				"<p>Transportation experts and ultimate road warriors.<br></p><p>Years ago, the Corps drove your family off the Farm. They rolled in, took over the land, and put renta-cops all over the place. But that was Before the War.</p>"];

var p1RoleChoice;

for (i = 0; i < roleArray.length; i++) {
	document.getElementById("roleChoice").innerHTML += "<p onmouseover='roleInfoChoice(" + i + ")' onclick='p1Role(" + i + ")'>" + roleArray[i] + " " + "</p>";
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