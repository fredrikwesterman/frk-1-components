import React from "react";
import styles from "./login.module.css";

const Button = ({ loginHandler }) => {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Button;
