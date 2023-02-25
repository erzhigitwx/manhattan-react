import React from "react";
import "../../styles/gallery.scss";
import firstImg from "../../assets/galleryBlock/firstImg.jpg";
import secondImg from "../../assets/galleryBlock/secondImg.jpg";
import thirdImg from "../../assets/galleryBlock/thirdImg.jpg";
import fourthImg from "../../assets/galleryBlock/fourthImg.jpg";
import fivethImg from "../../assets/galleryBlock/fivethImg.jpg";
import sixthImg from "../../assets/galleryBlock/sixthImg.jpg";
import seventhImg from "../../assets/galleryBlock/seventhImg.jpg";
import eighthImg from "../../assets/galleryBlock/eighthImg.jpg";
import tenthImg from "../../assets/galleryBlock/tenthImg.jpg";
import eleventhImg from "../../assets/galleryBlock/eleventhImg.jpg";
import twelvethImg from "../../assets/galleryBlock/twelvethImg.jpg";
import more from "../../assets/galleryBlock/more.png";

const GalleryBlock = function () {
  return (
    <div className="gallery-block">
      <li className="gallery-block__button">Top “Manhattan” photo</li>
      <h1 className="gallery-block__title">галерея</h1>
      <div className="gallery-block__container">
        <div className="gallery-block__container-unique">
          <img src={firstImg} alt="photoFromManhattan" className="unique-img"/>
          <img src={more} alt="more" className="unique-more"/>
        </div>
        <img src={secondImg} alt="photoFromManhattan" />
        <img src={thirdImg} alt="photoFromManhattan" />
        <img src={fourthImg} alt="photoFromManhattan" />
        <img src={fivethImg} alt="photoFromManhattan" />
        <img src={sixthImg} alt="photoFromManhattan" />
        <img src={seventhImg} alt="photoFromManhattan" />
        <img src={eighthImg} alt="photoFromManhattan" />
        <img src={tenthImg} alt="photoFromManhattan" />
        <img src={eleventhImg} alt="photoFromManhattan" />
        <img src={firstImg} alt="photoFromManhattan" />
        <img src={twelvethImg} alt="photoFromManhattan" />
      </div>
    </div>
  );
};

export default GalleryBlock;
