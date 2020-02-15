// //life events

// var lifeEventsArray = [];

// for (i = (age - 16); i > 0; i--) {
// 	lifeEventsArray.push(rollDice(10));
// 	console.log("these are dice rolls for x: " + lifeEventsArray);
// }

// //big problems/big wins
// if (lifeEventsArray[0] % 2 == 0) {
// 	var roll = rollDice(10);
// 	if (roll == 1) {
// 		if (roll <= 4) {
// 			lifeEventsArray[0] = "<li>You made a powerful connection in the police dept.</li>"
// 		} else if (roll <=7) {
// 			lifeEventsArray[0] = "<li>You made a powerful connection in the District Attorney's Office.</li>"
// 		} else {
// 			lifeEventsArray[0] = "<li>You made a powerful connection in the Mayor's Office.</li>"
// 		}
// 		} else if (roll == 2) {
// 			var roll2 = rollDice(10) * 100;
// 			lifeEventsArray[0] = "<li>Financial windfall: " + roll2 + "</li>";
// 			euroDollars = euroDollars + roll2;
// 		} else if (roll == 3) {
// 			var roll2 = rollDice(10) * 100;
// 			lifeEventsArray[0] = "<li>Big Score: " + roll2 + "</li>";
// 			euroDollars = euroDollars + roll2;
// 		} else if (roll == 4) {
// 			lifeEventsArray[0] = "<li>Find a Sensei. (needs to be coded in - begin at +2 or at +1 to a martial arts skill of your choice)</li>";
// 		} else if (roll == 5) {
// 			lifeEventsArray[0] = "<li>Find a Teacher. (needs to be coded in - att +1 to any int based skill or begin a new int based skill at +2)</li>";
// 		} else if (roll == 6) {
// 			lifeEventsArray[0] = "<li>You help out a powerful corporate executive, they owe you a favor.</li>";
// 			corpFavors = corpFavors + 1;
// 		} else if (roll == 7) {
// 			lifeEventsArray[0] = "<li>Local Nomad pack befriends you. Call on them for one favor a month (family special ability +2 - code in).</li>";
// 		} else if (roll == 8) {
// 			lifeEventsArray[0] = "<li>Make a police friend. Use them for inside information at a level of +2 streetwise on any police situation. Code in</li>";
// 		} else if (roll == 9) {
// 			lifeEventsArray[0] = "<li>Local boostergang likes you for some reason. 1 favor a month equivalent to family special ability +2. Don't push this favor.</li>";
// 		} else {
// 			lifeEventsArray[0] = "<li>Find a combat teacher. +1 to any weapon skill with the exception of martial arts or brawling or begin a new combat skill at +2.</li>";
// 		} 


var financialLoss = ( //roll1
			roll2 = rollDice(10) * 100,
 			financialLoss = "<li>Financial Loss: " + roll2 + "</li>",
 			euroDollars = euroDollars - roll2);

var imprisonment = ( //roll2
			roll2 = rollDice(10),
 			imprisonment = "<li>You have been in prison or held hostage (your choice) for " + roll2 + " months.</li>",
 			prison = prison + roll2);

var illness = "<li>You have contracted either an illness or drug habit in this time. You lost 1 point of reflex as a result and your reflex is now " + 
				(stats.ref = stats.ref - 1) + ".</li>";

// 	} else if (roll == 4) {
// 		var roll2 = rollDice(10);
// 		if (roll2 <= 3) {
// 			lifeEventsArray[0] = "You were backstabbed by someone and are being blackmailed. </li>";
// 		} else if (roll2  <= 7) {
// 			lifeEventsArray[0] = "You were backstabbed by someone and your secret was exposed. </li>"
// 		} else {
// 			lifeEventsArray[0] = "You were backstabbed by a close friend romatically or in your career (your choice). </li>"
// 		}
// 	} else if (roll == 5){
// 		var roll2 = rollDice(10);
// 		if (roll2 <= 4) {
// 		lifeEventsArray[0] = "<li>You were terribly disfigured in an accident of some kind. Your attractiveness has been subtracted by 5 as a result(to a minimum of 2 - rule check).</li>";
// 		stats.sexy = stats.sexy - 5;
// 		for (i = 0; stats.sexy <= 1; i++) {
// 			stats.sexy = stats.sexy +1;
// 		}
// 		} else if (roll2 <= 6) {
// 			var roll3 = rollDice(10);
// 			lifeEventsArray[0] = "<li>You were hospitalized for " + roll3 + " months.</li>";
// 		} else if (roll2 <= 8) {
// 			var roll3 = rollDice(10);
// 			lifeEventsArray[0] = "<li>You have lost " + roll3 + " months of memory due to an accident this year.</li>"
// 		} else {
// 			lifeEventsArray[0] = "<li>You constantly relive the nightmare of your accident and wake up screaming at night(8 in 10 chance -not coded-). You have ptsd. "
// 			var ptsd = true;
// 		}
// 	} else if (roll2 == 6) {
// 		var roll3 = rollDice(10);
// 		if (roll3 <=5) {
// 			lifeEventsArray[0] = "<li>Someone you cared about died accidentally. </li>";
// 		} else if (roll3 <= 8){
// 			lifeEventsArray[0] = "<li>Someone you cared about has been murdered this year by an unknown person.</li>";
// 		} else {
// 			lifeEventsArray[0] = "<li>Someone you cared about has been murdered and you know who did it. You just need proof.</li>";
// 		}
// 	} else if (roll2 == 7) {
// 		roll3 = rollDice(10);
// 		if (roll3 <= 3) {
// 			lifeEventsArray[0] = "<li>You were accused of theft.</li>";
// 		} else if (roll3 <= 5) {
// 			lifeEventsArray[0] = "<li>You were accused of being a coward.</li>";
// 		} else if (roll3 <= 8) {
// 			lifeEventsArray[0] = "<li>You were accused of murder.</li>";
// 		}  else if (roll3 == 9) {
// 			lifeEventsArray[0] = "<li>You were accused of rape.</li>";
// 		}  else if (roll3 == 10) {
// 			lifeEventsArray[0] = "<li>You were accused of lying and betrayal.</li>";
// 		}
// 	} else if (roll2 == 8) {
// 		roll3 = rollDice(10);
// 		lifeEventsArray[0] = "<li>You are hunted by the law for crimes you may or may not have commited (your choice) ";
// 		if (roll3 <= 3) {
// 			lifeEventsArray(0).push(" and only a couple of local cops want you. </li>");
// 		} else if (roll3 <= 6){
// 			lifeEventsArray(0).push("and the entire police force is after you. </li>");
// 		} else if (roll3 <= 8) {
// 			lifeEventsArray(0).push("and the state police are after you. </li>");
// 		}
// 	}
// }

//Disaster Strikes d10 pg 37

var financialLoss = (
 			financialLoss = "<li>Financial Loss: " + rollDice(10) * 100 + "</li>",
 			euroDollars = euroDollars - financialLoss);

const disasterStrikesArray = [financialLoss,imprisonment,illness,betrayel,accident,death,falslyAccused,wantedLaw,wantedCorp,incapacitated]