var quotes = [
	"Nothing's free. And if a corporation made it, the hidden costs are double...<br><p align='right'>Unknown",
	"Nobody ever leaves Night City. Except in a body bag.",
	"Night city.... Ahwoooo!<br><p align='right'>Unknown",
	"It's not the  Golden Age of the 2020's, choomba. But the Street still works.<br><p align='right'>Trace Santiago",
	"The City of the Fallen Angels. Not to mention the Legion, thE ChromerS, the Gilligans, the Inquisitors...<br><p align='right'> Lt. Strawberry Morressey, NCPD",
	"cyberpunk is what you  make it.<br><p align='right'>Maximum Mike",
	"the music takes us to the heart of our culture and allows us to monitor its pulse<br><p align='right'>rockerboy magazine",
	"music always gets hammered down to the three a's. axe, attitude, and audience.<br><p align='right'> kerry eurodyn",
	"this isn't going to hurt a bit. Well, maybe a little. Quit screamin ’ willya? How am I supposed to get this thing stuck on if you keep twitching like that?<br><p align='right'>scenes From Savage Doc's",
	"They're so... like... weak and flimsy, you know? you reach out and touch 'em and they... die...<br><p align='right'>unknown cyberpsycho",
	"In the Future, there’s no place to hide from yourself...<br><p align='right'>Lyle McClellan, Network 5",
	"The Rules:<br>1) Style Over Substance. 2) Attitude is Everything. 3) Always take It to the Edge. 4) Break the Rules.<br><p align='right'>RIPPERJACK",
	"Always take it to the Edge. It's the Cyberpunk way.<br><p align='right'> Johnny Silverhand",
	"I'm not a man or a machine. I'm just something in between. I'm all love—a dynamo So push the button and let me go.<br><p align='right'> —Lovin' Every Minute of It<br> 1984 Zomba Enterprises Inc. (ASCAP)</p>",
	"Have you ever seen the sunlight/ Screaming fast and mean and low? Get yourself illuminated. Get yourself that cyber glow. Made of steel and hard emotion. Give my love and face the day. In your face and here to party. Never gonna fade away.<br><p align='right'> -Johnny Silverhand</p>",
	"So welcome to the Time of the Red, choombatta. It's more dangerous than the once glamorous and hyper charged Lost Time of the Cyberpunk 2020s. The body count is higher and the stakes even nastier. But that's not going to stop you, is it? Didn't think so.<br><p align='right'> -Trace Santiago</p>",
	"All Right pipsqueak, time to see if metal really is better than meat. let's dance.<br><p align='right'> -Morgan Blackhand</p>",
	"Pay attention, punks. My old man used to say History will bite you in the ass if you don’t learn about it. It’s like a rabid dog that will go after you if you keep going back to its hideout. So, I’m going to fill you in with some history you’d better learn pronto, now that you’re on the Street. Because you do not want to get bit by this beast. <br><p align='right'> –Trace Santiago</p>"
]

function randomSplash() {
	var x = Math.floor(Math.random() * (quotes.length));
	document.getElementById("splashDisplay").innerHTML = quotes[x];
}

randomSplash();