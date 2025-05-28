// Assignment:
// You have been provided with two arrays: aquaticAnimals and rainforestAnimals.
// Your task is to use the spread operator (...) to combine all animals from both arrays into a single array called awesomeAnimals.

// Instructions:
// 1. Use the spread operator (...) to unpack the elements of each array.
// 2. Combine the unpacked elements into a new array called awesomeAnimals.
// 3. Ensure that the awesomeAnimals array does not contain any duplicate animals.
// 4. Log the awesomeAnimals array to the console to verify the result.

// Important Note:
// Be mindful of duplicate animals while combining the arrays. Ensure that each animal appears only once in the awesomeAnimals array.

// Initial Arrays
const aquaticAnimals = ["otter", "shark", "bluefin tuna"];
const rainforestAnimals = ["orang-utan", "elephant", "snake"];

// Using spread operator to combine arrays and Set to remove duplicates
const awesomeAnimals = [...new Set([...aquaticAnimals, ...rainforestAnimals])];

// Log the result
console.log(awesomeAnimals);
