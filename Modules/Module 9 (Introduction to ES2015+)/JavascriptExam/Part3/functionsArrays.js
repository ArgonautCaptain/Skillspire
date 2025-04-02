function generateRandomArray() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  return arr;
}

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

function displayArray(arr) {
  const list = document.getElementById("numberList");
  list.innerHTML = "";
  arr.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    list.appendChild(li);
  });
}

document.getElementById("generateButton").addEventListener("click", () => {
  const randomArray = generateRandomArray();
  const sortedArray = sortArray(randomArray);
  displayArray(sortedArray);
});
