

// const myProfile = {
// name: "Oracle",
// age: 26,
// careerGoal: "Programmer",
// favoriteFood: "Swallow", 
// favoriteHobby: "Coding"
// }

// console.log(`My name is ${myProfile.name}, i am ${myProfile.age} My favourite food if ${myProfile.favoriteFood} my hobby is ${myProfile.favoriteHobby}`);


const students = [
    { name: "John", score: 85 },
    { name: "Sarah", score: 72 },
    { name: "Mike", score: 91 },
    { name: "David", score: 64 },
    { name: "Emma", score: 88 }
];

for (const student of students) {
    console.log(student.name + " scored " + student.score);
}

function findLargest(students) {
    let largest = students[0].score;
    for (let i = 1; i < students.length; i++) {
        if (students[i].score > largest) {
            largest = students[i].score;
        }
    }
    return largest;
}
console.log(findLargest(students));


function findSmallest(students) {
    let smallest = students[0].score;
    for (let i = 1; i < students.length; i++) {
        if (students[i].score < smallest) {
            smallest = students[i].score;
        }
    }
    return smallest;
}
console.log(findSmallest(students));