import React from "react";
import "../../styles/pages/Home/About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="text">
        <p>私たちに関しては</p>
        <span>About us</span>
      </div>

      <div className="section-one">
        <img src="../../../public/images/sushi-sticks-about.png" alt="" />
        <div className="content-left">
          <p className="horizontal">寿司への情熱</p>
          <p className="vertical">寿 司 へ の 情 熱</p>
        </div>

        <div className="content-right">
          <h5>OUR PASSION FOR SUSHI</h5>
          <p>
            At Sushi Club, we're passionate about sushi. It all started years
            ago when we discovered the art of sushi-making. We were instantly
            hooked, spending countless hours perfecting our craft and
            experimenting with new flavors and techniques. For us, sushi it's a
            form of art.
          </p>
        </div>
      </div>

      <div className="sectione-two">
        {/* <img src="../../../public/images/sushi-sticks-about-2.png" alt="" /> */}
        <img
          src="https://uploads-ssl.webflow.com/64495ea0fca2f664fcbc78f0/644a4a165b4f8923deeffec1_Sushi-1.webp"
          alt=""
        />
        <div className="content-left">
          <h5>QUALITY EXCELLENCE</h5>
          <p>
            We believe that quality should never be compromised. That's why
            we're committed to using only the freshest and highest quality
            ingredients in all of our dishes. We source our fish from trusted
            suppliers and handpick every ingredient.
          </p>
        </div>

        <div className="content-right">
          <p className="horizontal">品質の卓越性</p>
          <p className="vertical">品 質 の 卓 越 性</p>
        </div>
      </div>
    </div>
  );
};

export default About;
