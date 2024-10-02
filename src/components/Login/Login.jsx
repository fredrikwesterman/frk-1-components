import React from "react";
import User from "./User";
import Password from "./Password";
import Button from "./Button";
import styles from "./login.module.css";
import NotRegistered from "./NotRegistered";

const Login = ({ loginHandler, setUser, setPassword, buttonText }) => {
  return (
    <div className={styles.loginContainer}>
      <User setUser={setUser} />
      <Password setPassword={setPassword} />
      <Button loginHandler={loginHandler} buttonText={buttonText} />
      <NotRegistered />
    </div>
  );
};

export default Login;
