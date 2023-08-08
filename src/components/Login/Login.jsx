import "./Login.css";
import React from "react";
import { useAuth } from "../../contexts/authContext";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate() ;

  const {
    currentUser,
    login,
    googleSignIn,
    logout,
    getAdditionalUserInfoGoogle,
  } = useAuth();

  const [signInDetails, setsignInDetails] = useState({
    email: "",
    password: "",
  });

  const handalInputChangeSignIn = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // if (name === "email") {
    //   const allValidations = {
    //     isEmp: value === "",
    //     isValid: /\S+@\S+\.\S+/.test(value),
    //   }
    //   setisValidSignIn({
    //     ...isValidSignIn,
    //     isEmailEmpty: allValidations.isEmp,
    //     email: allValidations.isValid,
    //   })
    // } else if (name === "password") {
    //   if (value === "") {
    //     setisValidSignIn({ ...isValidSignIn, isPasswordEmpty: true })
    //   } else {
    //     setisValidSignIn({ ...isValidSignIn, isPasswordEmpty: false })
    //   }
    // } else {
    //   if (value === "") {
    //   } else {
    //   }
    // }
    setsignInDetails({ ...signInDetails, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await login(signInDetails.email, signInDetails.password);
      // console.log(res)
      console.log(signInDetails);
      console.log("user signed in");
      navigate('/dash')
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const res = await logout();
      // console.log(res)
      console.log(signInDetails);
      console.log("user signed out");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSignIn}
        className="p-4 bg-white shadow-sm rounded-3"
      >
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
            value={signInDetails.email}
            onChange={handalInputChangeSignIn}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={signInDetails.password}
            onChange={handalInputChangeSignIn}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary text-light">
          Log In
        </button>
      </form>
      <button
        onClick={() => {
          console.log(currentUser.email);
        }}
      >
        {" "}
        Click Me{" "}
      </button>
      <button onClick={handleSignOut}> Log Out </button>
    </>
  );
};

export default Login;
