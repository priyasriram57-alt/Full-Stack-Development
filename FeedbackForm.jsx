import { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3e5f5",
        padding: "30px",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          margin: "auto",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#6a1b9a" }}>
          Feedback Form
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  marginBottom: "15px"
                }}
              />
            </label>

            <label>
              Feedback:
              <textarea
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  marginBottom: "15px"
                }}
              />
            </label>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#6a1b9a",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Submit
            </button>
          </form>
        ) : (
          <div style={{ textAlign: "center", color: "green" }}>
            <h3>Thank you, {name}!</h3>
            <p>Your feedback has been submitted.</p>
          </div>
        )}
      </div>
    </div>
  );
}
