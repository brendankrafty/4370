const defaultTotal = 10;

playGuessingGame(50, defaultTotal)

function playGuessingGame (numToGuess, totalGuesses) {
    var guess;
    var count = 0;
    do {
        guess = prompt("Enter a number between 1 and 100.");
        totalGuesses--;
        count++;
        if (guess < numToGuess) {
            alert(guess + " is too small. Guess a larger number.")
        }
        else if (guess > numToGuess) {
            alert(guess + " is too large. Guess a smaller number.")
        }
        else if (isNaN(guess)){
            alert("That is not a number. Please enter a number.")
            count--;
            totalGuesses++;
        }
        if (guess === numToGuess) {
            alert("Correct! You got it in " + count + "tries.")
            return count;
        }
        else {
            return 0;
        }
    } while (totalGuesses >= 0);
    return 0;
}