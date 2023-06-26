import React from "react";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="left">
          <div className="slogan">
            <img
              src="https://uploads-ssl.webflow.com/64495ea0fca2f664fcbc78f0/64495eafe677df90ff7037da_Logo-Light.png"
              alt=""
            />
            <p>THE FIRST RULE OF SUSHI CLUB, YOU MUST TRY SUSHI CLUB</p>
          </div>

          <div className="links">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 640 640"
            >
              <path d="M184.715 2.752h270.582C556.908 2.752 640 84.816 640 185.069v269.85c0 100.277-83.092 182.317-184.703 182.317H184.715C83.104 637.236 0 555.196 0 454.919v-269.85C0 84.816 83.103 2.752 184.715 2.752zm133.561 145.939c98.741 0 178.868 80.127 178.868 178.868 0 98.753-80.127 178.868-178.868 178.868-98.765 0-178.88-80.115-178.88-178.868 0-98.741 80.115-178.868 178.88-178.868zm0 60.414c65.387 0 118.454 53.056 118.454 118.454s-53.068 118.466-118.454 118.466c-65.41 0-118.466-53.067-118.466-118.466 0-65.398 53.056-118.454 118.466-118.454zM491.321 123.9c16.04 0 29.044 13.004 29.044 29.032 0 16.04-13.004 29.044-29.044 29.044-16.028 0-29.032-13.004-29.032-29.044 0-16.028 13.004-29.032 29.032-29.032zM206.825 54.58H433.21c85.005 0 154.526 69.178 154.526 153.712V435.81c0 84.532-69.52 153.699-154.526 153.699H206.825c-85.005 0-154.537-69.167-154.537-153.7V208.29c0-84.532 69.532-153.71 154.537-153.71z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 640 640"
            >
              <path d="M380.001 120.001h99.993V0h-99.993c-77.186 0-139.986 62.8-139.986 139.986v60h-80.009V320h79.985v320h120.013V320h99.994l19.996-120.013h-119.99v-60.001c0-10.843 9.154-19.996 19.996-19.996v.012z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2859 3333"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z" />
            </svg>
          </div>
        </div>

        <div className="right">
          <div className="text">
            <p>FOR ANY INFORMATION WE'LL GET BACK AT YOU</p>
          </div>

          <div className="question">
            <input
              type="text"
              placeholder="Enter your Email here"
            />
            <input type="submit"  value="SEND" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>SHABDAN KOZHONALIEV</p>
      </div>
    </div>
  );
};

export default Footer;
