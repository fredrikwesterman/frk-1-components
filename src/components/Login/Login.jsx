import React from "react";
import User from "./User";
import Password from "./Password";
import Button from "./Button";
import styles from "./login.module.css";
import NotRegistered from "./NotRegistered";

import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div className={styles.loginContainer}>
      <User setUser={setUser} />
      <Password setPassword={setPassword} />
      <Button />
      <NotRegistered />
    </div>
  );
};

export default Login;
