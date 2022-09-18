import React from "react";
import "./register.scss";

function Register() {
  return (
    <div className="registerCon">
      <div className="registerWrapper">
        <span className="registerTitle">Enter Credentials to Register</span>
        <input className="regUsernameInput" type="email" placeholder="Email " />
        <input
          className="regUsernameInput"
          type="text"
          placeholder="Username "
        />
        <input
          className="regUsernameInput"
          type="password"
          placeholder="Create Password"
        />
        <input
          className="regUsernameInput"
          type="password"
          placeholder="Confirm Password"
        />
        <button className="registerBut">Register</button>

        <span className="alreadyHaveAcc">Already have an account? LogIn</span>

        <button className="registerBut">LogIn</button>
      </div>
    </div>
  );
}
export default Register;
