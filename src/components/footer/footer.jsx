import React from "react";
import MiniFooter from "./miniFooter";
import SiteInfo from "./siteInfo";
import footerMAP from "../../assets/footerMAP.jpg";

const Footer = function () {
  return (
    <div className="footer">
      <li className="footer-button">Top “Manhattan” place</li>
      <h1 className="footer-title">контакты</h1>
      <div className="footer-blocks">
        <div className="footer-blocks__content">
          <SiteInfo />
          <img src={footerMAP} alt="map" id="footer-map"/>
        </div>
        <footer>
          <MiniFooter />
        </footer>
      </div>
    </div>
  );
};

export default Footer;
