import React from "react";
import styles from "./login.module.css";

const Password = ({ setPassword }) => {
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.passwordContainer}>
      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        onChange={onPasswordChange}
      />
    </div>
  );
};

export default Password;
