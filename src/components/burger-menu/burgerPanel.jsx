import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../styles/App.scss";

const BurgerPanel = function ({ menuActive, setMenuActive }) {
  return (
    <>
      <div
        className={menuActive ? "menu" : "menu__active"}
        onClick={() => setMenuActive(!menuActive)}
      >
      
        <div className="blur" />

        <header className="navbar-header menu__content">
          <img src={logo} alt="logo" className="logo" />

          <div id="navbar-nav">
            <ul id="navbar-ul">
              <li className="navbar-ul__element">
                <Link to="/">Главная</Link>
              </li>
              <li className="navbar-ul__element">
                <Link to="/menu">Меню</Link>
              </li>
              <li className="navbar-ul__element">
                <Link to="/afisha">Афиша</Link>
              </li>
              <li className="navbar-ul__element">
                <Link to="/collab">Сотрудничество</Link>
              </li>
              <li className="navbar-ul__element">
                <Link to="/gallery">Галерея</Link>
              </li>
              <li className="navbar-ul__element">
                <Link to="/news">Новости</Link>
              </li>
            </ul>
          </div>

          <li className="navbar-button">бронирование</li>
        </header>
      </div>
    </>
  );
};

export default BurgerPanel;
