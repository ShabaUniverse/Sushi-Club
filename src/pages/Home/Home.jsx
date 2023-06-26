import React from "react";
import "../../styles/pages/Home/Home.scss";
import "../../styles/App.scss";

import Welcome from "./Welcome";
import Frames from "./Frames";
import About from "./About";
import Menu from "./Menu";
import Reserve from "./Reserve";



const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Welcome />
        <Frames />
        <About />
        <Menu />
        <Reserve />
      </div>
    </div>
  );
};

export default Home;
