import { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      id: 1,
      question: "HTML stands for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlink Text Mode"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      id: 2,
      question: "Which hook is used for state in React?",
      options: ["useRef", "useState", "useEffect"],
      answer: "useState"
    }
  ];

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  function submitQuiz() {
    let total = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.answer) {
        total++;
      }
    });
    setScore(total);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e3f2fd",
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
          borderRadius: "10px"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#1976d2" }}>
          Online Quiz
        </h2>

        {questions.map(q => (
          <div key={q.id} style={{ marginBottom: "15px" }}>
            <p><b>{q.question}</b></p>
            {q.options.map(opt => (
              <label key={opt} style={{ display: "block" }}>
                <input
                  type="radio"
                  name={`q${q.id}`}
                  onChange={() =>
                    setAnswers({ ...answers, [q.id]: opt })
                  }
                />
                {opt}
              </label>
            ))}
          </div>
        ))}

        <button
          onClick={submitQuiz}
          style={{
            padding: "8px 20px",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            display: "block",
            margin: "auto"
          }}
        >
          Submit
        </button>

        {score !== null && (
          <h3
            style={{
              textAlign: "center",
              color: "green",
              marginTop: "15px"
            }}
          >
            Score: {score} / {questions.length}
          </h3>
        )}
      </div>
    </div>
  );
}
