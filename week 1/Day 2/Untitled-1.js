const name= "Marvel";
const age= 26;
const dreamJob= "Software Engineer";

console.log(`My name is ${name}, I am ${age} years old, and my dream job is to be a ${dreamJob}.`);

isEven(10);
isOdd(9);
console.log(isEven, isOdd);

Largest(1,2,3,4,5,6,7,8,9,10);
console.log (Largest);

const food = ["Pizza", "Burger", "Pasta", "Sushi"];
console.log(`My favorite foods are: ${food.join(", ")}.`);

food.push("Ice Cream");
console.log(`After adding a new favorite food, my favorite foods are now: ${food.join(", ")}.`);

food.pop();
console.log(`After removing the last favorite food, my favorite foods are now: ${food.join(", ")}.`);

food.includes("Sushi") ? console.log("Sushi is one of my favorite foods!") : console.log("Sushi is not one of my favorite foods.");

const student = {
    name: "Oracle",
    age: 26,
    course: "Software Engineering",
    isGraduated: false
}
console.log(`The student's name is ${student.name}, they are ${student.age} years old, studying ${student.course}, and their graduation status is ${student.isGraduated ? "graduated" : "not graduated"}.`);

const score = 95;
if (score >= 90) {
    console.log("You got an A!");
}else if (score >= 80) {
    console.log("You got a B!");
}else if (score >= 70) {
    console.log("You got a C!");
}else if (score >= 60) {
    console.log("You got a D!");
}else {
    console.log("You got an F SEE ME FOR HELP!");
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
