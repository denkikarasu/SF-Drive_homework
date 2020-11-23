import React from "react";

function Team () {

    const teamList = [
        {
            name: "Иван Иванов",
            role: "CEO",
            photo: "img/about_ivanov.jpg"
        },
        {
            name: "Алексей Смирнов",
            role: "Frontend-разработчик",
            photo: "img/about_smirnov.jpg"
        },
        {
            name: "Денис Ярцев",
            role: "Backend-разработчик",
            photo: "img/about_yartsev.jpg"
        },
        {
            name: "Николай Морозов",
            role: "Дизайнер",
            photo: "img/about_morozov.jpg"
        },
        {
            name: "Ирина Деева",
            role: "Копирайтер",
            photo: "img/about_deyeva.jpg"
        },
        {
            name: "Мария Стрелкова",
            role: "SMM",
            photo: "img/about_strelkova.jpg"
        }
    ];

    return (
        <section className="team">

            <h2>Команда</h2>

            <div className="team_display">
                {teamList.map(teamMember => 
                    <div className="team_member" key={teamMember.name}>
                        <img className="team_photo" src={teamMember.photo} alt={teamMember.name + " фото"} />
                        <p className="name">{teamMember.name}</p>
                        <p className="role">{teamMember.role}</p>
                    </div>
                )}
            </div>


            </section>
    );
}

export default Team;