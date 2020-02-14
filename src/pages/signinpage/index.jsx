import React from "react";
import SignIn from "../../components/signin";
import SignUp from "../../components/signup";
import "./styles.scss";

const SignInPage = () => (
  <div className="sign-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInPage;
