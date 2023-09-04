import React from "react";
import "./Home.css";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <LeftNav />
      </div>
      <div>Main Content</div>
      <div>
        <RightNav />
      </div>
    </div>
  );
};

export default Home;
