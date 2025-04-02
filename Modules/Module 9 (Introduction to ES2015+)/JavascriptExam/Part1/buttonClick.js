document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");
  const output = document.getElementById("output");

  button.addEventListener("click", function () {
    output.textContent = "Button clicked!";
  });
});