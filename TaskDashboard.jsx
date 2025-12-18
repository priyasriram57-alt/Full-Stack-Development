import { useState } from "react";

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f1f8e9",
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
        <h2 style={{ textAlign: "center", color: "#33691e" }}>Task Dashboard</h2>

        <form onSubmit={addTask} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            style={{
              width: "70%",
              padding: "8px",
              marginRight: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 15px",
              backgroundColor: "#33691e",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Add
          </button>
        </form>

        <ul style={{ listStyleType: "none", padding: 0 }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                padding: "8px",
                backgroundColor: "#e8f5e9",
                borderRadius: "5px"
              }}
            >
              <span>{task}</span>
              <button
                onClick={() => removeTask(index)}
                style={{
                  backgroundColor: "#c62828",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  padding: "4px 10px"
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p style={{ textAlign: "center", color: "#777" }}>No tasks yet.</p>
        )}
      </div>
    </div>
  );
}
