import React from "react";
import "../../styles/news.scss";

const NewsElement = function () {
  return (
    <div className="news-element">
      <li className="news-element__button">Top “Manhattan” news</li>
      <h1 className="news-element__title">новости</h1>

      <div className="news-element__container">
        <h1 className="news-element__container-title">
          вэб-страница "Manhattan"
        </h1>
        <ul className="news-element__container-list">
          <li className="container-list__item">
            Здесь мы выкладываем события и изменения в "manhattan".
          </li>
          <li className="container-list__item">о свежих новостях и услуг.</li>
          <li className="container-list__item">мы всегда рады вам!</li>
        </ul>
      </div>
    </div>
  );
};

export default NewsElement;
