// Game state variables
let randomInt = Math.floor(Math.random() * 100) + 1;
let score = 0;
let totalGuesses = 0;

// Function to generate new random number
function generateNewNumber() {
    randomInt = Math.floor(Math.random() * 100) + 1;
}

// Function to update the display
function updateDisplay(message) {
    const resultDiv = document.getElementById('result');
    if (!resultDiv) {
        const div = document.createElement('div');
        div.id = 'result';
        document.querySelector('.form').appendChild(div);
    }
    document.getElementById('result').innerHTML = message;
}

// Function to handle the guess
function handleGuess() {
    const guessInput = document.getElementById('guessfield');
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        updateDisplay('Please enter a valid number between 1 and 100');
        return;
    }

    totalGuesses++;
    
    if (guess < randomInt) {
        updateDisplay(`Try again! The number is higher than ${guess}.<br>
                      Score: ${score}<br>
                      Total Guesses: ${totalGuesses}`);
    } else if (guess > randomInt) {
        updateDisplay(`Try again! The number is lower than ${guess}.<br>
                      Score: ${score}<br>
                      Total Guesses: ${totalGuesses}`);
    } else {
        score++;
        updateDisplay(`Congratulations! You got it right! The number was ${randomInt}.<br>
                      A new number has been generated.<br>
                      Score: ${score}<br>
                      Total Guesses: ${totalGuesses}`);
        generateNewNumber();
    }
    
    guessInput.value = '';
}

// Add event listener when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const guessButton = document.getElementById('submitguess');
    guessButton.addEventListener('click', handleGuess);
    
    // Add event listener for Enter key
    const guessInput = document.getElementById('guessfield');
    guessInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleGuess();
        }
    });
    
    // Initial display
    updateDisplay('Welcome! Guess a number between 1 and 100.<br>Score: 0<br>Total Guesses: 0');
});
