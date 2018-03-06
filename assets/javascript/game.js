// constant for max number of user guesses
// magic numbers is bad yo
const numberOfGuesses = 9;


// player wins
var userWins =0;
// player losses
var userLosses=0;
// # of guesses player has left
var userGuessesLeft= numberOfGuesses;
// previous letters user has guessed
var userGuesses=[];



// Array of valid alphabetical characters
const computerChoices = ['a','b','c','d','e','f','g','h','i','j','k',
'l', 'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
// letter computer has randomly chosen
var computerGuess;

// called on page load, sets up initial variable values, calls to randomize computer guess and calls to have 
// values displayed on screen
function initialize(){
	var userWins = 0;
	var userLosses = 0;
	var userGuessesLeft = numberOfGuesses;
	var userGuesses = [];
	console.log(userWins, userLosses, userGuessesLeft);	
	randomizeComputerGuess();
	printScore();

}
function resetGame(){
	randomizeComputerGuess();
	userGuessesLeft = numberOfGuesses;
	userGuesses = [];
	printScore();
}

//Generates a random alphabetical value for the user to try to guess
function randomizeComputerGuess(){
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess); //FOR DEBUG ONLY, COMMENT OUT TO TRUELY PLAY
}

//Prints the wins, losses, guesses left, and previous guesses made to the screen
function printScore(){
	document.getElementById("userWins").textContent = userWins;
	document.getElementById("userLosses").textContent = userLosses;
	document.getElementById("userGuessesLeft").textContent = userGuessesLeft;
/*
		This logic block builds a string to hold all of the previous player guesses seperated by spaces

*/
		// string variable that will contain all the guesses
	var guessStr = " ";
		//loop through all of the users previous guesses, append each to the existing string
	for(i=0;i<userGuesses.length;i++){
		guessStr = guessStr + userGuesses[i] + " ";
	}
		//display string on page
	document.getElementById("userGuesses").textContent = guessStr;
} 

// Begin logic for game function
// executes each time a key is pressed
document.onkeyup = function(event){
	console.log("key press " + event.key);
	var userGuess = event.key;
		// Begin logic block to test for valid input
		// compare user input to each element in computerChoices (ie valid alphabetical characters), 
		// if it matches it is a valid input and continue with logic
	var validInput = false;
	for(i=0;i<computerChoices.length;i++){
		if(userGuess === computerChoices[i]){
			validInput = true;
		}
	}
	console.log(validInput);
		// End logic block to test for valid input
if(validInput){
		// Begin logic block to see if character has NOT already been guessed
		// Loop through user guesses, if character has been guessed then it is ignored 
		// and player is not penalized
	var charNew = true;
	for(i=0;i<userGuesses.length;i++){
		if (userGuess === userGuesses[i]){
			 charNew = false;
		}
	}
		// End logic block to test if character has not already been guessed 
	if(charNew){
	// if user guesses correctly user gains a win, computer guess is rerandomized, 
	// webpage display is updated
	if(userGuess === computerGuess){
		userWins++;
		resetGame();
	// if user guesses incorrectly and has guesses left then a guess is deducted and guess is added to userGuesses
	}else if(userGuessesLeft > 1){
			userGuesses.push(userGuess);
			userGuessesLeft--;
			printScore();
	// if user runs out of guesses, then add loss, rerandomize computer guess and reset players # of guesses
	}else{
		userLosses++
		resetGame();
	}
		}
	console.log(userWins, userLosses, userGuessesLeft);
	}
}


