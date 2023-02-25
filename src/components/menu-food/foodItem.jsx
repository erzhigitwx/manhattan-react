import React from "react";

const FoodItem = function ({ photo, name, mass, describe, price }) {
  return (
    <>
      <div className="food-item">
        <img src={photo} alt="food" className="food-photo" />

        <div className="food-character">
          <div className="row">
            <div>
              <p className="food-name">{name}</p>
              <p className="food-mass">{mass}</p>
            </div>
            <li className="food-price">{price}</li>
          </div>

          <p className="food-des">{describe}</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
