import React from "react";
import styles from "./Login.module.css";

const User = ({ setUser }) => {
  const onUserComplete = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className={styles.userContainer}>
      <label>Username</label>
      <input
        type="text"
        placeholder="username"
        // onChange={(e) => setUser(e.target.value)}
        onBlur={onUserComplete}
      />
    </div>
  );
};

export default User;
