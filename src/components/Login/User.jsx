import React from "react";

const User = ({ setUser }) => {
  const onUserComplete = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      user
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
