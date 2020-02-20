//Dice

function rollDice(i) {
	var randomDice = Math.floor(Math.random() * i) + 1;
	return randomDice;
}

//Header
document.getElementById("header").innerHTML = '<h1 class="siteLogo">Cyberpunk</h1><h2 class="subLogo">RED</h2><ul class="menuTop"><li class="btn"><a href="../index2.html">Home</a></li><li class="btn"><a href="about.html">About</a></li><li class="btn"><a href="contact.html">Contact</a></li></ul>';
//Button
function refreshPage(){
    window.location.reload();
} 
//Footer
document.getElementById("footer").innerHTML = "Site Made by Venus(Git, Email, Twitter) Cyberpunk RED. is owned by R. Talsorian Games.";