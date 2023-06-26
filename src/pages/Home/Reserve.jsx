import React from "react";
import "../../styles/pages/Home/Reserve.scss";

const Reserve = () => {
  return (
    <div className="reserve">
      <div className="reserve-box">
        <div className="text">
          <p>MAKE A RESERVATION</p>
          <span>予約する</span>
        </div>

        <div className="inputs">
            <input type="text" placeholder="Enter your full name"/>
            <input type="text" placeholder="Enter date"/>
            <input type="text" placeholder="Enter time"/>
        </div>

        <div className="sending">
            <button>send reservation</button>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
