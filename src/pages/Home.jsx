import React from "react";
import "../styles/pages/Home.scss";
import "../styles/App.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="wrapper">
          <div className="welcome">
            <div className="image-content">
              <img
                src="https://uploads-ssl.webflow.com/64495ea0fca2f664fcbc78f0/644a331f75b153000b3403d8_Hero-logo-p-800.webp"
                alt="slogan"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
