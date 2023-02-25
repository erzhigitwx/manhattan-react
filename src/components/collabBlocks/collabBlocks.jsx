import React from "react";
import collabPng1 from "../../assets/collabPng1.png";
import collabPng2 from "../../assets/collabPng2.png";

const CollabBlock = function () {
  return (
    <div className="collab-block">
      <li className="collab-block__button">Top “Manhattan” events</li>
      <h1 className="collab-block__title">корпоративы</h1>
      <div className="collab-block__content">
        <h1 className="collab-block__content-title">корпоративы</h1>
        <div className="collab-block__content-container">
          <div className="collab-block__content-left">
            <img src={collabPng1} alt="png" />
            <p>Фуршетное меню от 1000 руб. на человека (до 150 человек).</p>
          </div>
          <div className="collab-block__content-right">
            <img src={collabPng2} alt="png2" />
            <p>Банкетное меню от 1500 руб. на человека (до 100 человек). </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollabBlock;
