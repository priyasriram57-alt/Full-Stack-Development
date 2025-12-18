import { useState } from "react";

export default function AttendanceTracker() {
  // Sample student list
  const students = ["Alice", "Bob", "Charlie", "David", "Eva"];

  // Store attendance status
  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student] = "Absent"; // Default all absent
      return acc;
    }, {})
  );

  // Function to toggle attendance
  function toggleAttendance(student) {
    setAttendance({
      ...attendance,
      [student]: attendance[student] === "Present" ? "Absent" : "Present"
    });
  }

  const totalPresent = Object.values(attendance).filter(
    (status) => status === "Present"
  ).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e0f7fa",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#00796b" }}>
          Attendance Tracker
        </h2>

        <p style={{ textAlign: "center" }}>
          Click a student's button to mark Present/Absent
        </p>

        {students.map((student) => (
          <div key={student} style={{ marginBottom: "10px" }}>
            <span style={{ marginRight: "10px" }}>{student}</span>
            <button
              onClick={() => toggleAttendance(student)}
              style={{
                padding: "5px 15px",
                backgroundColor:
                  attendance[student] === "Present" ? "#4caf50" : "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              {attendance[student]}
            </button>
          </div>
        ))}

        <hr style={{ margin: "20px 0" }} />
        <h3 style={{ textAlign: "center" }}>
          Total Present: {totalPresent} / {students.length}
        </h3>
      </div>
    </div>
  );
}
