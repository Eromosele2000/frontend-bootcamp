const numbers = [12, 5, 8, 21, 7, 30, 15, 42, 9, 18];

let oddNumbersEncountered = [];
let count = 0;
let totalSum = 0;

for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    // Stop completely when you reach 30
    if (currentNumber === 30) {
        break;
    }

    // Skip even numbers using continue
    if (currentNumber % 2 === 0) {
        continue;
    }

    // Process odd numbers
    oddNumbersEncountered.push(currentNumber);
    count++;
    totalSum += currentNumber;
}

// Display the results
console.log("The odd numbers encountered before 30:", oddNumbersEncountered);
console.log("The number of odd numbers:", count);
console.log("Their total:", totalSum);
