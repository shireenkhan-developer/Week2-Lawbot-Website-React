import React from "react";
import logo from "../images/lawbot.jpg";

export default function navbar() {
  return (
    <nav className="navbar ">
      <ul className="nav-list">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#sec2">About</a>
        </li>
        <li>
          <a href="#sec4">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
