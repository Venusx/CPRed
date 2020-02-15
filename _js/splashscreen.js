var quotes = [
	"Have you ever seen the sunlight/ Screaming fast and mean and low? Get yourself  illuminated/ Get yourself that cyber glow. Made of steel and hard emotion/ Give my love and face the day/ In your face and here to party. Never gonna fade away.<br><p align='right'> -Johnny Silverhand</p>",
	"So welcome to the Time of the Red, choombatta. It's more dangerous than the once glamorous and hyper charged Lost Time of the  Cyberpunk 2020s. The body count is higher and the stakes even  nastier. But that's not  going to stop you, is it? Didn't think so.<br><p align='right'> -Trace Santiago</p>",
	"All Right pipsqueak, time to see if metal really is better than meat. let's dance.<br><p align='right'> -Morgan Blackhand</p>",
	"Pay attention, punks. My old man used to say History will bite you in the ass if you don’t learn about it. It’s like a rabid dog that will go after you if you keep going back to its hideout. So, I’m going to fill you in with some history you’d better learn pronto, now that you’re on the Street. Because you do not want to get bit by this beast. <br><p align='right'> –Trace Santiago</p>"
]

function randomSplash() {
	var x = Math.floor(Math.random() * (quotes.length));
	document.getElementById("splashDisplay").innerHTML = quotes[x];
}

randomSplash();