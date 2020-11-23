import React, {Fragment} from "react";

import "../img/undraw_team_spirit_hrr41.svg";
import "../img/about_deyeva.jpg";
import "../img/about_ivanov.jpg";
import "../img/about_morozov.jpg";
import "../img/about_smirnov.jpg";
import "../img/about_strelkova.jpg";
import "../img/about_yartsev.jpg";

import Team from "./Team";

function About () {
    return (
        <>
            <section className="top_section">
                <img className="top_image" src="img/undraw_team_spirit_hrr41.svg" alt="Иллюстрация - команда" aria-hidden="true" />

                <h1>О нас</h1>

                <p className="top_text">Это учебный проект, созданный с&nbsp;целью получения боевого опыта в&nbsp;разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в&nbsp;котором можно не&nbsp;только арендовать автомобили, но&nbsp;и&nbsp;сдавать их в&nbsp;аренду.</p>
            </section>

            <section className="contacts">

                <h2>Контакты</h2>

                <div className="contact_details">
                    <div className="contacts_item">
                        <p className="contact_type">Электронная почта</p>
                        <p className="contact_info">drive@skillfactory.com</p>
                    </div>
                    <div className="vertical_separator"></div>
                    <div className="contacts_item">
                        <p className="contact_type">Телефон</p>
                        <p className="contact_info">+7 912 123-45-67</p>
                    </div>
                </div>

            </section>

            <Team />

        </>

    );
}

export default About;