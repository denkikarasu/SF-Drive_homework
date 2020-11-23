import React from "react";
import {
    Link
} from "react-router-dom";

import "../img/Logo.svg";
import "../img/menu_icon.svg";

function Header () {
    return (
        <header>
            <Link to="/" className="logo_link" aria-label="Ссылка на главную страницу сервиса SkillDrive"><img className="logo_img" src="img/Logo.svg" alt="SkillDrive" /></Link>

            <div className="navbar">
                <nav className="navbar_menu">
                    <ul>
                        <li className="navbar_item">
                            <Link to="/about" className="navbar_link">О нас</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to="/terms" className="navbar_link">Условия</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to="/faq" className="navbar_link">Частые вопросы</Link>
                        </li>
                    </ul>
                </nav>

                <button className="button_login">Войти</button>
            </div>

            <button className="menu_burger">
                <img className="burger_icon" src="img/menu_icon.svg" alt="Menu"  aria-label="Открыть меню сайта" />
            </button>

        </header>
    );
}

export default Header;