import React from "react";
const Header = () => {
  const date = new Date();

  return (
    <div className="header-container">
      <div className="date">{date.toLocaleDateString()}</div>
      <h2 className="quote">
        Nigdzie nie znajdziesz spokojniejszego miejsca odosobnienia niż w swojej
        własnej duszy ~ Marcus Aurelius
      </h2>
    </div>
  );
};
export default Header;
