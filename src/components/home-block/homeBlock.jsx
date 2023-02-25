import React from "react";
import ListFilm from "./Listfilm";
import backgroundBlock from "../../assets/backgroundBlock.jpg";

const HomeBlock = function () {
  return (
    <div className="home-block">
      <div className="block-container">
        <img
          src={backgroundBlock}
          alt="background"
          className="home-block__back"
        />
        <div className="block-container__elems">
          <li className="button-about">Since 1996</li>
          <h1 className="home-block__title">True. Fontanka. Underground. </h1>
        </div>
      </div>
      <ListFilm />
    </div>
  );
};

export default HomeBlock;
