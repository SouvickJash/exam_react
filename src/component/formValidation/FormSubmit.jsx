import React, { useState } from "react";

const FormSubmit = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = {};

    if (!data.username) validationError.username = "Username is required";
    if (!data.email) validationError.email = "Email is required";
    if (!data.password) validationError.password = "Password is required";

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
    //   alert("Form submitted");
      console.log(data);

      setSubmittedData([...submittedData, data]); 
      setData({ username: "", email: "", password: "" }); 
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="username"
          placeholder="Enter name"
          value={data.username}
          onChange={handleChange}
        />
        {error.username && <span style={{ color: "red" }}>{error.username}</span>}
        <br />

        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={data.email}
          onChange={handleChange}
        />
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        <br />

        <label>Password</label>
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          value={data.password}
          onChange={handleChange}
        />
        {error.password && <span style={{ color: "red" }}>{error.password}</span>}
        <br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      <h3>Submitted Data:</h3>
      {submittedData.length === 0 ? (
        <p>No submissions yet</p>
      ) : (
        submittedData.map((item, index) => (
          <div key={index}>
            <p><strong>Name:</strong> {item.username}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Password:</strong> {item.password}</p>
            <hr />
          </div>
        ))
      )}
    </>
  );
};

export default FormSubmit;
