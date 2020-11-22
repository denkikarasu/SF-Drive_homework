import React, {Fragment} from "react";

import "../img/undraw_questions_75e01.svg";
import Collapsible from "./Collapsible";

function FAQ () {
    return (
        <>
            <section className="top_section">
                <img className="top_image" src="img/undraw_questions_75e01.svg" alt="Иллюстрация - вопросы" aria-hidden="true" />

                <h1>Частые вопросы</h1>

                <p className="top_text">Отвечаем на&nbsp;вопросы, которые у&nbsp;вас могут возникнуть.</p>
            </section>

            <Collapsible />
        </>

    );
}

export default FAQ;