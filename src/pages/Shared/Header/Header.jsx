import React from "react";
import "./Header.css";
import moment from "moment";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>

      <p className="title">Journalism Without Fear or Favour</p>

      <p className="time">{moment().format("dddd, MMMM Do YYYY")}</p>

      <div className="marquee-container">
        <p className="marquee-latest">Latest</p>
        <Marquee speed={150} className="marquee-text" pauseOnHover={true}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) => (isActive ? "active" : "not-active")}
            >
              Career
            </NavLink>
          </li>
        </ul>

        <div className="user-profile">
          <p>email</p>
          <Link to="/login">
            <button className="common-button">Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
