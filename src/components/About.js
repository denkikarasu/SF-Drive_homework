import React, {Fragment} from "react";

import "../img/undraw_team_spirit_hrr41.svg";
import "../img/about_deyeva.jpg";
import "../img/about_ivanov.jpg";
import "../img/about_morozov.jpg";
import "../img/about_smirnov.jpg";
import "../img/about_strelkova.jpg";
import "../img/about_yartsev.jpg";

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

            <section className="team">

                <h2>Команда</h2>

                <div className="team_display">

                    <div className="team_member">
                        <img className="team_photo" src="img/about_ivanov.jpg" alt="Иван Иванов фото" />
                        <p className="name">Иван Иванов</p>
                        <p className="role">CEO</p>
                    </div>
                    <div className="team_member">
                        <img className="team_photo" src="img/about_smirnov.jpg" alt="Алексей Смирнов фото" />
                        <p className="name">Алексей Смирнов</p>
                        <p className="role">Frontend-разработчик</p>
                    </div>
                    <div className="team_member">
                        <img className="team_photo" src="img/about_yartsev.jpg" alt="Денис Ярцев фото" />
                        <p className="name">Денис Ярцев</p>
                        <p className="role">Backend-разработчик</p>
                    </div>
                    <div className="team_member">
                        <img className="team_photo" src="img/about_morozov.jpg" alt="Николай Морозов фото" />
                        <p className="name">Николай Морозов</p>
                        <p className="role">Дизайнер</p>
                    </div>
                    <div className="team_member">
                        <img className="team_photo" src="img/about_deyeva.jpg" alt="Ирина Деева фото" />
                        <p className="name">Ирина Деева</p>
                        <p className="role">Копирайтер</p>
                    </div>
                    <div className="team_member">
                        <img className="team_photo" src="img/about_strelkova.jpg" alt="Мария Стрелкова фото" />
                        <p className="name">Мария Стрелкова</p>
                        <p className="role">SMM</p>
                    </div>
                </div>
                

            </section>
        </>

    );
}

export default About;