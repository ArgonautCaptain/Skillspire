var nameHeading = document.createElement("h1");
nameHeading.textContent = "Jason Updegraff";
document.body.appendChild(nameHeading);

var colorHeading = document.createElement("h3");
colorHeading.textContent = "Favorite Color: Blue";
colorHeading.style.color = "blue";
document.body.appendChild(colorHeading);

var foodHeading = document.createElement("h3");
foodHeading.textContent = "Favorite Food: Sashimi";
document.body.appendChild(foodHeading);

var foodImage = document.createElement("img");
foodImage.src = "https://assets.tmecosys.cn/image/upload/t_web767x639/img/recipe/ras/Assets/64EF898D-2EDD-4B47-A456-E6A7D137AC91/Derivates/00f76cac-64f6-4573-be4f-e604a7d99143.jpg"; // Replace with a valid image URL
foodImage.alt = "Nigiri";
foodImage.style.width = "300px";
document.body.appendChild(foodImage);