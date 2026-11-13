import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Aisha", subject: "React", marks: 82, reviewed: false },
  { id: 2, name: "Rohan", subject: "JavaScript", marks: 95, reviewed: false },
  { id: 3, name: "Meera", subject: "HTML", marks: 67, reviewed: false },
  { id: 4, name: "Arjun", subject: "CSS", marks: 38, reviewed: false },
  { id: 5, name: "Diya", subject: "React", marks: 74, reviewed: false },
  { id: 6, name: "Kabir", subject: "JavaScript", marks: 52, reviewed: false },
];

function getGrade(marks) {
  return marks >= 90
    ? "A+"
    : marks >= 75
    ? "A"
    : marks >= 60
    ? "B"
    : marks >= 40
    ? "C"
    : "F";
}

function StudentRow({ student, onMarkReviewed }) {
  const passed = student.marks >= 40;
  const grade = getGrade(student.marks);

  return (
    <tr>
      <th scope="row">{student.name}</th>
      <td>{student.subject}</td>
      <td>{student.marks}</td>
      <td>
        <span className={`badge ${passed ? "text-bg-success" : "text-bg-danger"}`}>
          {passed ? "Pass" : "Fail"}
        </span>
      </td>
      <td>
        <span
          className={`badge ${
            grade === "F" ? "text-bg-danger" : "text-bg-primary"
          }`}
        >
          Grade {grade}
        </span>
      </td>
      <td>
        {student.reviewed && (
          <span className="badge text-bg-success me-2">Reviewed</span>
        )}
        <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={() => onMarkReviewed(student.id)}
          disabled={student.reviewed}
        >
          {student.reviewed ? "Reviewed" : "Mark as Reviewed"}
        </button>
      </td>
    </tr>
  );
}

function StudentResultDashboard() {
  const [students, setStudents] = useState(initialStudents);

  function markAsReviewed(studentId) {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === studentId
          ? { ...student, reviewed: true }
          : student
      )
    );
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      <main className="container py-5">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <h1 className="h2 mb-1">Student Result Dashboard</h1>
            <p className="text-secondary mb-0">
              Review marks, results, and grades.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => setStudents([])}
            disabled={students.length === 0}
          >
            Clear List
          </button>
        </div>

        {students.length === 0 ? (
          <div className="alert alert-warning" role="alert">
            No student records found.
            <button
              type="button"
              className="btn btn-sm btn-warning ms-3"
              onClick={() => setStudents(initialStudents)}
            >
              Restore Students
            </button>
          </div>
        ) : (
          <div className="table-responsive shadow-sm rounded">
            <table className="table table-striped table-hover align-middle mb-0">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Student</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Marks</th>
                  <th scope="col">Result</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Review</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <StudentRow
                    key={student.id}
                    student={student}
                    onMarkReviewed={markAsReviewed}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}

export default StudentResultDashboard;
