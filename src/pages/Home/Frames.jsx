import React from "react";
import "../../styles/pages/Home/Frames.scss";


const Frames = () => {
  return (
    <div className="frame">
      <div className="first">
        <div className="top">
          <div className="image-box">
            <img src="/images/red-nocorner-frames.png" alt="" />
            <p>We dance to a different tuna</p>
          </div>
        </div>
        <div className="bottom">
          <p>素 敵 な 寿 司</p>
        </div>
      </div>

      <div className="second">
        <div className="texts">
          <h5>MORE</h5>
          <h5>THAN</h5>
          <span>60</span>
          <p>FRESH & HEALTHY</p>
          <h5>SUSHIES</h5>
        </div>
      </div>

      <div className="third">
        <div className="top">
          <p>When we seafood we love it</p>
        </div>
        <div className="bottom">
          <div className="image-box">
            <img src="/images/blue-nocorner-frames.png" alt="" />
            <p>We're your soymate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frames;
