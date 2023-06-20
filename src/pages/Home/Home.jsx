import React from "react";
import "../../styles/pages/Home/Home.scss";
import "../../styles/App.scss";

import Welcome from "./Welcome";
import Frames from "./Frames";
import About from "./About";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Welcome />
        <Frames />
        <About />
      </div>
    </div>
  );
};

export default Home;
