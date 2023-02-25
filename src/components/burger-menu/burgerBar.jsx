import React from "react";
import BurgerPanel from "./burgerPanel";

const BurgerBar = function ({ menuActive, setMenuActive }) {
  return (
    <>
      <nav className="burger__menu" onClick={() => setMenuActive(!menuActive)}>
        <div
          className={menuActive ? "burger__btn__active" : "burger__btn"}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span />
        </div>
      </nav>
      <main className={menuActive ? "main__active " : "main"}></main>
      {(menuActive && (
        <BurgerPanel setMenuActive={setMenuActive} menuActive={menuActive} />
      )) ||
        null}
    </>
  );
};

export default BurgerBar;
