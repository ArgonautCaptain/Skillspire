const colors = ["red", "blue", "green", "purple", "orange", "pink", "black"];


const button = document.getElementById("btn");
const box = document.querySelector(".box h1");

let index = 0;


function changeTextColor() {
  box.style.color = colors[index];
  index = (index + 1) % colors.length;
};

button.addEventListener("click", changeTextColor);
