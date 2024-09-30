import React from "react";
import style from "./Login.module.css";

const NotRegistered = () => {
  return (
    <div className={style.notRegisteredContainer}>
      <a className={style.notRegisteredText}>Not registered? sign up now!</a>
    </div>
  );
};

export default NotRegistered;
