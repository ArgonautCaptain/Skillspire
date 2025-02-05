var test = [];

test.push([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);

for (let index = 0; index < test.length; index++) {
  console.log("Array " + index);
  for (let i = 0; i < test[index].length; i++) {
    const element = test[index][i];
    console.log(element);
  }
}
