import React, { useState } from "react";

function ValidationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!name) formErrors.name = "Name is required";

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    if (!phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = "Phone must be 10 digits";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPass) {
      formErrors.confirmPass = "Confirm Password is required";
    } else if (confirmPass !== password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log({ name, email, phone, password });
    }
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: "center" }}>Validation Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <p style={errorStyle}>{errors.name}</p>

          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <p style={errorStyle}>{errors.email}</p>

          <input
            type="text"
            placeholder="Enter Phone (10 digits)"
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />
          <p style={errorStyle}>{errors.phone}</p>

          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <p style={errorStyle}>{errors.password}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPass(e.target.value)}
            style={inputStyle}
          />
          <p style={errorStyle}>{errors.confirmPass}</p>

          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

/* 🔹 Background Image Style */
const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1508780709619-79562169bc64')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
};

/* 🔹 Form Card */
const formContainerStyle = {
  width: "350px",
  padding: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  borderRadius: "8px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  fontFamily: "Arial"
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "5px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "14px"
};

const errorStyle = {
  color: "red",
  fontSize: "12px",
  marginBottom: "10px"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px"
};

export default ValidationForm;
