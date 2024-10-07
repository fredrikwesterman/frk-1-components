import React from "react";
import Button from "./Button";

const Navbar = ({ renderComponent }) => {
  return (
    <div>
      <Button renderComponent={renderComponent} />
    </div>
  );
};

export default Navbar;
