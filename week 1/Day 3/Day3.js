function count() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}

count();    

function printEvenNumbers() {
    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}

printEvenNumbers();

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// const number = [10, 20, 30, 40, 50];
// let total = 0;

// for (let number of numbers) {
//     total += number;
// }

console.log(total);

const numbers1 = [12, 45,7,89,23,56]
function findLargest(numbers1) {
    let largest = numbers1[0];
    for (let i = 1; i < numbers1.length; i++) {
        if (numbers1[i] > largest) {
            largest = numbers1[i];
        }
    }
    return largest;
}

console.log(findLargest(numbers));

//Number analyzer
const numbers = [10, 25, 7, 42, 18, 30];
console.log(numbers.length)

function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
console.log(findLargest(numbers));

let total = 0;
for (let number of numbers) {
    total += number;
}

console.log(total);


function findSmallest(numbers) {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}
console.log(findSmallest(numbers));

let evenCount = 0;

for (let i = 0; i < numbers.length; i++) {
  
  if (numbers[i] % 2 === 0) {
    evenCount = evenCount + 1; 
  }
  
}
console.log(evenCount); 

let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
  
  if (numbers[i] % 2 !== 0) {
    oddCount = oddCount + 1; 
  }
  
}
console.log(oddCount);   
