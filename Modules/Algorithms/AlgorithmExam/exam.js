// part 1
console.log("---Part 1---");
function print1To255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}
print1To255();

// part 2
console.log("---Part 2---");
function printIntsAndSum0To255() {
    let sum = 0;
    for (let i = 0; i <= 255; i++) {
        sum += i;
        console.log(`Number: ${i}, Sum: ${sum}`);
    }
}
printIntsAndSum0To255();

// part 3
console.log("---Part 3---");
function printOdds1To255() {
    for (let i = 1; i <= 255; i += 2) {
        console.log(i);
    }
}
printOdds1To255();

// part 4
console.log("---Part 4---");
function printArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printArrayVals([1, 2, 3, 4, 5]);

// part 5
console.log("---Part 5---");
function returnOddsArray1To255() {
    const oddsArray = [];
    for (let i = 1; i <= 255; i += 2) {
        oddsArray.push(i);
    }
    return oddsArray;
}
console.log(returnOddsArray1To255());

// part 6
console.log("---Part 6---");
function printMaxOfArray(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
printMaxOfArray([1, 2, 3, 4, 5]);

// part 7
console.log("---Part 7---");
function printAverageOfArray(arr) {
    if (arr.length === 0) return null;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const average = sum / arr.length;
    console.log(average);
}
printAverageOfArray([1, 2, 3, 4, 5]);

// part 8
console.log("---Part 8---");
function printMaxMinAverageArrayVals(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    const average = sum / arr.length;
    console.log(`Max: ${max}, Min: ${min}, Average: ${average}`);
}
printMaxMinAverageArrayVals([1, 2, 3, 4, 5]);

// part 9
console.log("---Part 9---");
function returnArrayCountGreaterThanY(arr, y) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    return count;
}
console.log(returnArrayCountGreaterThanY([1, 2, 3, 4, 5], 3));

// part 10
console.log("---Part 10---");
function swapStringForArrayNegativeVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Skillspire';
        }
    }
    return arr;
}
console.log(swapStringForArrayNegativeVals([-1, -2, 3, 4, -5]));

// part 11
console.log("---Part 11---");
function squareArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}
console.log(squareArrayVals([1, 2, 3, 4, 5]));

// part 12
console.log("---Part 12---");
function shiftArrayValsLeft(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    return arr;
}
console.log(shiftArrayValsLeft([1, 2, 3, 4, 5]));

// part 13
console.log("---Part 13---");
function swapArrayVals(arr) {
    if (arr.length !== 2) return null;
    const temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
}
console.log(swapArrayVals([1, 2]));

// part 14
console.log("---Part 14---");
function swapArrayPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}
console.log(swapArrayPairs([1, 2, 3, 4]));
console.log(swapArrayPairs(["Brendan", true, 42]));