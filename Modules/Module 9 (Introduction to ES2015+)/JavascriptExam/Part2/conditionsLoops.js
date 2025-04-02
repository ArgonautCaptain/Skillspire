let userInput = prompt("Enter a number:");
let number = parseInt(userInput);

if (isNaN(number)) {
  console.log("That's not a valid number.");
} else {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(i + " - Even number");
    } else {
      console.log(i + " - Odd number");
    }
  }
}
