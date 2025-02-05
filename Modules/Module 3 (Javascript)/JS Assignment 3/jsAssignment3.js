function checkAge() {
  let age = prompt("Please enter your age:");

  age = Number(age);

  if (isNaN(age) || age <= 0) {
    console.log("Please enter a valid age.");
    return;
  }

  if (age <= 16) {
    console.log("Stay home, study, and get your driver's license.");
  } else if (age >= 18 && age < 21) {
    console.log("Have some fun, but not TOO much fun. You're still a young adult.");
  } else if (age >= 21) {
    console.log("Have fun. But be responsible. You are in control of your life.");
  } else {
    console.log("You are not within the specified age ranges.");
  }
}

checkAge();