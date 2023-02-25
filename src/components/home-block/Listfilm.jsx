import React, { useState } from "react";
import film1 from "../../assets/film1.jpg";
import film2 from "../../assets/film2.jpg";
import film3 from "../../assets/film3.png";
import film4 from "../../assets/film4.jpg";
import film5 from "../../assets/film5.jpg";
const ListFilm = function () {
  const [focus, setFocus] = useState(true);

  function handleClick() {
    setFocus(!focus);
  }

  return (
    <div className="list-films">
      <ul className="list-films_switch">
        <li className="list-films__switch-item" onClick={() => handleClick()}>
          Ближайшие
        </li>
        <li
          className="list-films__switch-item item-2"
          onClick={() => handleClick()}
        >
          скоро
        </li>
      </ul>

      <div
        className="list-films__container"
        style={{
          background: focus
            ? "rgba(213, 98, 29, 0.1)"
            : "rgba(213, 98, 29, 0.05)",
        }}
      >
        {(focus && (
          <>
            <img src={film1} alt="film" className="film1" />
            <img src={film2} alt="film" className="film2" />
            <img src={film3} alt="film" className="film3" />
            <img src={film4} alt="film" className="film4" />
          </>
        )) || <img src={film5} alt="film" className="film5" />}
      </div>
    </div>
  );
};

export default ListFilm;
