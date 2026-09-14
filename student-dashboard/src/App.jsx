import { useState } from "react";

const students = [
  { name: "John", score: 85 },
  { name: "Sarah", score: 72 },
  { name: "Mike", score: 91 },
  { name: "David", score: 64 },
  { name: "Emma", score: 88 }
];

function findLargest(students) {
  let largest = students[0].score;

  for (let i = 1; i < students.length; i++) {
    if (students[i].score > largest) {
      largest = students[i].score;
    }
  }

  return largest;
}

function findAverage(students) {
  let total = 0;

  for (let student of students) {
    total += student.score;
  }

  return total / students.length;
}

function countHighScores(students) {
  let count = 0;

  for (let student of students) {
    if (student.score >= 80) {
      count++;
    }
  }

  return count;
}

function App() {
  const [showHighPerformers, setShowHighPerformers] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((student) =>
      showHighPerformers ? student.score >= 80 : true
    );

  return (
    <div>
      <div className="header">
        <h1>Student Dashboard</h1>
        <p>Track student performance at a glance.</p>
      </div>

      <div className="stats">
        <div className="card">
          <h2>Highest Score</h2>
          <p>{findLargest(students)}</p>
        </div>

        <div className="card">
          <h2>Average Score</h2>
          <p>{findAverage(students)}</p>
        </div>

        <div className="card">
          <h2>Students Scoring 80+</h2>
          <p>{countHighScores(students)}</p>
        </div>
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Search students..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <button
        className="filter-button"
        onClick={() => setShowHighPerformers(!showHighPerformers)}
      >
        {showHighPerformers
          ? "Show All Students"
          : "Show High Performers"}
      </button>

      <div className="student-list">
        <h2>Students</h2>

        {filteredStudents.length === 0 ? (
          <p>No students found.</p>
        ) : (
          filteredStudents.map((student) => (
            <p key={student.name}>
              {student.name} scored {student.score}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default App;