import React from "react";
import "../styles/components/Ham.scss";

const Ham = ({ show, setShow }) => {
  return (
    <div className="ham">
      <div className="close-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 122.878 122.88"
          enableBackground="new 0 0 122.878 122.88"
          xmlSpace="preserve"
          onClick={() => setShow(false)}
        >
          <g>
            <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
          </g>
        </svg>
      </div>

      <div className="ham-nav">
        <a href="">HOME</a>
        <a href="">ABOUT US</a>
        <a href="">MENU</a>
      </div>

      <div className="ham-reserve">
        <a href="">Make Reservation</a>
      </div>
    </div>
  );
};

export default Ham;
