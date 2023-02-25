import React from "react";

const BlockItem = function ({ photo, name }) {
  return (
    <div className="block-item">
      <img src={photo} alt="preview" />
      <p className="block-item__name">{name}</p>
      <div className="block-item__icons">
        <a href="#" className="fa fa-telegram" />
        <a href="#" className="fa fa-vk" />
      </div>
    </div>
  );
};

export default BlockItem;
