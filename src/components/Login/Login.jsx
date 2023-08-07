import "./Login.css";
import React from "react";
import { useAuth } from "../../contexts/authContext";

const Login = () => {
  const { googleSignIn, currentUser, logout, getAdditionalUserInfoGoogle } = useAuth();

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await googleSignIn();
      console.log(res)
      console.log("user signed in")
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

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
        Log In
      </button>
    </form>
  );
};

export default Login;
