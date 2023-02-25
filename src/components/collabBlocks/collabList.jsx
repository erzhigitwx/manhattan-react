import React from "react";

const CollabList = function () {
  return (
    <div className="collab-list">
      <h1 className="collab-list__title">ПОЧЕМУ МЫ?</h1>
      <div className="collab-list__content">
        <li className="collab-list__content-item">
          Отдельный зал на 30 человек с профессиональной системой караоке
        </li>
        <li className="collab-list__content-item">
          Удобная парковка и близость к трем станциям метро в центре города
        </li>
        <li className="collab-list__content-item">Большие экраны </li>
        <li className="collab-list__content-item">
          Танцпол с современной звуковой и световой аппаратурой
        </li>
        <li className="collab-list__content-item">
          Сцена с проекционным экраном.
        </li>
      </div>
    </div>
  );
};

export default CollabList;
