import React from "react";
import "./RightNav.css";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
const RightNav = () => {
  return (
    <div>
      <h1>Login With</h1>
      <div className="login-button-container">
        <button className="right-nav-google-btn">
          <FaGoogle /> <span> Login with Google</span>
        </button>
        <button className="right-nav-github-btn">
          <FaGithub /> <span> Login with Github</span>
        </button>
      </div>

      <h2>Find Us With</h2>
      <div className="social-media-container">
        <li className="social-media-list">
          <FaFacebook /> <span>Facebook</span>
        </li>
        <li className="social-media-list">
          <FaTwitter /> <span>Twitter</span>
        </li>
        <li className="social-media-list">
          <FaInstagram /> <span>Instagram</span>
        </li>
      </div>
    </div>
  );
};

export default RightNav;
