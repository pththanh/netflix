import React from "react";
import "./Login.css";
import StandardImage from "../../common/StandarImage";

export default function Login() {
  return (
    <div className="login-screen">
      <div className="login-screen--background">
        <StandardImage
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix-logo"
          className="login-logo"
          width={80}
        />
      </div>
      <button className="login-button">Sign In</button>
      <div className="login-gradient"></div>
      <div className="login-body">
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time</h2>
        </>
      </div>
    </div>
  );
}
