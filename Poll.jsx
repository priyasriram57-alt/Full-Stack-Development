import { useState } from "react";

export default function Poll() {
  const [votes, setVotes] = useState({
    option1: 0,
    option2: 0,
    option3: 0
  });

  function vote(option) {
    setVotes({
      ...votes,
      [option]: votes[option] + 1
    });
  }

  const totalVotes = votes.option1 + votes.option2 + votes.option3;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e8f5e9",
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
        <h2 style={{ textAlign: "center", color: "#2e7d32" }}>
          Classroom Poll
        </h2>

        <p style={{ textAlign: "center" }}>
          <b>Which subject do you like most?</b>
        </p>

        <button
          onClick={() => vote("option1")}
          style={styles.button}
        >
          Java
        </button>

        <button
          onClick={() => vote("option2")}
          style={styles.button}
        >
          Python
        </button>

        <button
          onClick={() => vote("option3")}
          style={styles.button}
        >
          React
        </button>

        <hr />

        <h3>Live Results</h3>
        <p>Java: {votes.option1}</p>
        <p>Python: {votes.option2}</p>
        <p>React: {votes.option3}</p>

        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          Total Votes: {totalVotes}
        </p>
      </div>
    </div>
  );
}

const styles = {
  button: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
