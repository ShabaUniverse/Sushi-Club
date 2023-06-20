import React from "react";
import '../../styles/pages/Home/Welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome-wrapper">
      <div className="welcome">
        <div className="image-content-slogan">
          <h6 className="slogan-top-text">the first rule of sushi club</h6>
          <img
            src="https://uploads-ssl.webflow.com/64495ea0fca2f664fcbc78f0/644a331f75b153000b3403d8_Hero-logo-p-800.webp"
            alt="slogan"
            />
          <h6 className="slogan-bottom-text">you must try sushi club</h6>
        </div>
        <img
          className="fish-image-right"
          src="https://uploads-ssl.webflow.com/64495ea0fca2f664fcbc78f0/64495eaffb977d662d3495f8_Fish-Right-p-500.webp"
          alt=""
        />
        <img
          className="fish-image-left"
          src="https://uploads-ssl.webflow.com/64495ea0fca2f664fcbc78f0/64495ee2119c837907b12d44_Fish%20Left-p-500.webp"
          alt=""
        />
      </div>

      <div className="welcome-intro">
        <div className="top">
          <p>発見</p>
        </div>

        <div className="bottom">
          <p>MENU</p>
          <img
            src="https://uploads-ssl.webflow.com/64495ea0fca2f664fcbc78f0/644963d736c354052797dd8d_Button.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
