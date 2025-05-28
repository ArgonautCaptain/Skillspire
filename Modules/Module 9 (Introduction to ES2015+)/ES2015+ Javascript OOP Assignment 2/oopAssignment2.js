const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class Boxer {
    constructor(height, weight, wins, losses) {
        this.height = height;
        this.weight = weight;
        this.wins = wins;
        this.losses = losses;
    }

    displayStats() {
        console.log(`Boxer Stats:
        Height: ${this.height} cm
        Weight: ${this.weight} kg
        Wins: ${this.wins}
        Losses: ${this.losses}`);
    }

    // Method to calculate overall score based on properties
    calculateScore() {
        return (this.height * 0.3) + (this.weight * 0.3) + (this.wins * 0.3) - (this.losses * 0.1);
    }
}

// Create two boxer objects
const boxer1 = new Boxer(180, 75, 15, 2);
const boxer2 = new Boxer(175, 80, 12, 3);

// Display stats for both boxers
console.log("Boxer 1 Stats:");
boxer1.displayStats();
console.log("\nBoxer 2 Stats:");
boxer2.displayStats();

// Calculate scores to determine the better boxer
const boxer1Score = boxer1.calculateScore();
const boxer2Score = boxer2.calculateScore();

// Determine the better boxer
const betterBoxer = boxer1Score > boxer2Score ? 1 : 2;

// Prompt user for their bet using readline
readline.question("Which boxer would you like to bet on? (Enter 1 or 2): ", (userChoice) => {
    // Check if user won or lost
    if (parseInt(userChoice) === betterBoxer) {
        console.log("Congratulations! You won the bet!");
    } else {
        console.log("Sorry, you lost the bet!");
    }

    // Display the results
    console.log(`\nBoxer 1 Score: ${boxer1Score.toFixed(2)}`);
    console.log(`Boxer 2 Score: ${boxer2Score.toFixed(2)}`);
    console.log(`Better Boxer: Boxer ${betterBoxer}`);

    // Close the readline interface
    readline.close();
});
