import React from "react";

import CollapsiblePanel from "./CollapsiblePanel";

function Collapsible () {

    const collapsiblePanels = [
        {
            number: 1,
            question: "Могу ли я отменить бронь?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {   
            number: 2,
            question: "Могу ли я вернуть деньги, если не подошёл автомобиль?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {   
            number: 3,
            question: "Что делать, если случилось ДТП?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            number: 4,
            question: "Могу ли я оставить автомобиль в удобном для меня месте?",
            answer: "Данный вопрос обсуждается с&nbsp;собственником, но как правило автомобиль нужно вернуть туда, где вы его получили."
        },
        {
            number: 5,
            question: "Что делать, если собственник просит заплатить ему напрямую?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            number: 6,
            question: "Должен ли я заправлять автомобиль?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ];

    return (
        <section className="collapsible_wrapper">
            {collapsiblePanels.map(panel => 
                <CollapsiblePanel key={panel.number} panel={panel} />
            )}

        </section>
    );
}

export default Collapsible;