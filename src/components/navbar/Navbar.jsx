import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = function () {
  return (
    <header className="navbar-header menu__content">
      <img src={logo} alt="logo" className="logo" />

      <nav className="navbar-nav">
        <ul className="navbar-ul">
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
      </nav>

      <li className="navbar-button">бронирование</li>
    </header>
  );
};

export default Navbar;
