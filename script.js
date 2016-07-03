function add (a){
	return a + 2;
}

function multiply (a){
	return a * 3;
}

function subtract (a){
	return a - 4;
}

console.log("The result of my multiple function combination is " + add(multiply(subtract(2))) + ".");