import React from "react";
import "../../styles/pages/Home/Home.scss";
import "../../styles/App.scss";

import Welcome from "./Welcome";
import Frames from "./Frames";
import About from "./About";
import Menu from "./Menu";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Welcome />
        <Frames />
        <About />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
