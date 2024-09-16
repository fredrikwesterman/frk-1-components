import React from "react";

const Password = ({ setPassword }) => {
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      Password
      <input
        type="password"
        placeholder="password"
        onChange={onPasswordChange}
      />
    </div>
  );
};

export default Password;
