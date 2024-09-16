import React from "react";
import User from "./User";
import Password from "./Password";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div>
      <User setUser={setUser} />
      <Password setPassword={setPassword} />
      <p>username: {user}</p>
      <p>password: {password}</p>
    </div>
  );
};

export default Login;
