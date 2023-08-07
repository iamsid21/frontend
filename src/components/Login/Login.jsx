import "./Login.css";
import React from "react";

const Login = () => {
  const handleSubmit = () => {
    console.log("Login Form Submitted :P");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-sm rounded-3">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="example@email.abc"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary text-light">
        Submit
      </button>
    </form>
  );
};

export default Login;
