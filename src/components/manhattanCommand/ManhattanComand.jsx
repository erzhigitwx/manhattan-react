import React from "react";
import LeftBlock from "./blocks/left/leftBlock";
import RightBlock from "./blocks/right/rightBlock";

const ManhattanComand = function () {
  return (
    <div className="manhattan-comand">
      <li className="manhattan-comand__button">Top “Manhattan” party</li>
      <h1 className="manhattan-comand__title">ТЕхрайдер</h1>
      <div className="manhattan-blocks">
        <RightBlock />
        <LeftBlock />
      </div>
    </div>
  );
};

export default ManhattanComand;
