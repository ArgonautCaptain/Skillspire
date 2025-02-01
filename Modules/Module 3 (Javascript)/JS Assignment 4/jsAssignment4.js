function collectUserData() {
  var fullName = prompt("Enter your full name:");
  var favoriteFood = prompt("Enter your favorite food:");
  var favoriteActivity = prompt("Enter your favorite activity:");

  if (!fullName || !favoriteFood || !favoriteActivity) {
    console.log("All fields are required. Please refresh and try again.");
    return;
  }

  console.log("Full Name: " + fullName);
  console.log("Favorite Food: " + favoriteFood);
  console.log("Favorite Activity: " + favoriteActivity);

  function createHeading(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    document.body.appendChild(h1);
  }

  createHeading("Full Name: " + fullName);
  createHeading("Favorite Food: " + favoriteFood);
  createHeading("Favorite Activity: " + favoriteActivity);
}

collectUserData();