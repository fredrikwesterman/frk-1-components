import React from "react";
import styles from "./login.module.css";

const Button = ({ loginHandler, buttonText }) => {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={loginHandler}>{buttonText}</button>
    </div>
  );
};

export default Button;
