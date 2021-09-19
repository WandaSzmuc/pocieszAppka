import React from "react";
const Header = () => {
  const date = new Date();

  return (
    <div className="row">
      <div className="date">{date.toLocaleDateString()}</div>
      <h2 className="quote">tutaj będzie super cytat</h2>
    </div>
  );
};
export default Header;
