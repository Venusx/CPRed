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