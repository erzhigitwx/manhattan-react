import React from "react";
import BlockItem from "./blockItem";
import preview1 from "../../../../assets/leftBlock/preview1.jpg";
import preview2 from "../../../../assets/leftBlock/preview2.jpg";

const LeftBlock = function () {
  return (
    <div className="left-block">
      <h1 className="left-block__title">Звукорежиссеры клуба МАНХЭТТЕН</h1>
      <div className="left-block__items">
        <BlockItem photo={preview1} name={"Изотов Константин"} />
        <BlockItem photo={preview2} name={"Давид Хозиев"} />
      </div>
    </div>
  );
};

export default LeftBlock;
