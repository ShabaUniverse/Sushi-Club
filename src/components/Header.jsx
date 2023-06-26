import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../styles/components/Header.scss";
import "../styles/App.scss";
import Ham from "./Ham";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/">
              <img
                src="https://uploads-ssl.webflow.com/64495ea0fca2f664fcbc78f0/644a2ee325637028c19e100f_Logo.webp"
                alt="logo"
              />
            </Link>
          </div>

          <div className="menu-hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 351.67"
              onClick={() => setShow(true)}
            >
              <path
                fill-rule="nonzero"
                d="M0 0h512v23.91H0V0zm0 327.76h512v23.91H0v-23.91zm0-163.88h512v23.91H0v-23.91z"
              />
            </svg>
          </div>

          {show && <Ham show={show} setShow={setShow}/>}


          <div className="nav">
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT US</a>
              </li>
              <li>
                <a href="">MENU</a>
              </li>
            </ul>
          </div>

          <div className="reservation">
            <a href="">make reservation</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
