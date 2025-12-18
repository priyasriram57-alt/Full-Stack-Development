import { useState } from "react";

export default function CourseEnrollment() {
  const courses = ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science"];

  // Store enrollments
  const [enrollments, setEnrollments] = useState({
    Mathematics: 0,
    Physics: 0,
    Chemistry: 0,
    Biology: 0,
    "Computer Science": 0
  });

  function enroll(course) {
    setEnrollments({
      ...enrollments,
      [course]: enrollments[course] + 1
    });
  }

  const totalEnrollments = Object.values(enrollments).reduce((a, b) => a + b, 0);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff3e0",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#ef6c00" }}>Course Enrollment</h2>
        <p style={{ textAlign: "center" }}><b>Select a course to enroll:</b></p>

        {courses.map((course) => (
          <button
            key={course}
            onClick={() => enroll(course)}
            style={{
              width: "100%",
              padding: "10px",
              margin: "8px 0",
              backgroundColor: "#ef6c00",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Enroll in {course}
          </button>
        ))}

        <hr style={{ margin: "20px 0" }} />
        <h3 style={{ textAlign: "center" }}>Live Enrollment Stats</h3>

        {courses.map((course) => (
          <p key={course}>
            {course}: {enrollments[course]} student{enrollments[course] !== 1 ? "s" : ""}
          </p>
        ))}

        <p style={{ marginTop: "10px", fontWeight: "bold", textAlign: "center" }}>
          Total Enrollments: {totalEnrollments}
        </p>
      </div>
    </div>
  );
}
