function findNegatives (arr) {
  var numberArray = arr.slice();
  for (var i = 0; i < arr.length; i++) {
      if (numberArray[i] < 0) {
          numberArray[i] = "Negative"
      }
  }
  return numberArray;
}

arrayWithNegatives = [1, 2, -3, 4, -5, 6, 7, -8, 9, 10];
console.log("Array with negatives: ");
console.log(arrayWithNegatives);
console.log("Array with negatives replaced by 'Negative': ");
arrayWithoutNegatives = findNegatives(arrayWithNegatives);
console.log(arrayWithoutNegatives);

function writeBackwards (str) {
    var string = str;
    var reversedString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

string = "Hello, World!";
console.log("Original string: " + string);
var backwardsString = writeBackwards(string);
console.log("Reversed string: " + backwardsString);