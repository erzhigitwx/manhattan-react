import React from "react";

const RowItem = function ({ title, setActive, active }) {
  function handleClick(e) {
    setActive(active === title ? null : title);
  }
  return (
    <div
      className={`row-item ${active === title ? "active" : ""}`}
      onClick={handleClick}
    >
      {(active === title && (
        <div>
          <p className="row-item__title">{title}</p>
          <div>
            <ul className="row-item__list-container">
              <li className="row-item__list">
                Acoustic system BELL Top 600W x 2
              </li>
              <li className="row-item__list">
                Acoustic system BELL Mid 600W x 2
              </li>
              <li className="row-item__list">
                Acoustic system BELL Sub 1000W x 2
              </li>
              <li className="row-item__list">
                Front monitor Yamaha SM12V 300w x 2
              </li>
              <li className="row-item__list">
                Backside monitor Dynacord 500W x 2
              </li>
            </ul>
          </div>
        </div>
      )) || <p className="row-item__title">{title}</p>}
      <p>
        <i className={`arrow ${active === title ? "up" : "down"}`}></i>
      </p>
    </div>
  );
};

export default RowItem;
