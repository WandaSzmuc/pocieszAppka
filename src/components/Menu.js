import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">pocieszAppka</div>
      <div className="menu-container">
        <Link to="/">Przed medytacją</Link>
        <Link to="/diary">Twój dziennik</Link>
      </div>
    </div>
  );
};
export default Menu;
