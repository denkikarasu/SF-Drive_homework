import React from "react";

function Collapsible () {
    return (
        <section className="collapsible_wrapper">
            <button type="button" className="collapsible">Могу ли я отменить бронь?<span className="collapsible_icon icon-chevron-down"></span></button>
            <div className="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>


            <button type="button" className="collapsible">Могу ли я вернуть деньги, если не&nbsp;подошёл автомобиль?<span className="collapsible_icon icon-chevron-down"></span></button>
            <div className="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>            

            <button type="button" className="collapsible">Что делать, если случилось ДТП?<span className="collapsible_icon icon-chevron-down"></span></button>
            <div className="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>
            
            <button type="button" className="collapsible">Могу ли я оставить автомобиль в&nbsp;удобном для меня месте?<span className="collapsible_icon icon-chevron-down"></span></button>
            <div className="content">
                <p>
                    Данный вопрос обсуждается с&nbsp;собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.
                </p>
            </div>
            
            <button type="button" className="collapsible">Что делать, если собственник просит заплатить ему напрямую?<span className="collapsible_icon icon-chevron-down"></span></button>
            <div className="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            
            <button type="button" className="collapsible">Должен ли я заправлять автомобиль?<span className="collapsible_icon icon-chevron-down"></span></button>
            <div className="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </section>
    );
}

export default Collapsible;



    window.onload = function () {

        const collapsible = document.getElementsByClassName('collapsible');
        let i;
    
        for (i = 0; i < collapsible.length; i++) {
        collapsible.item(i).addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('open');
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
        }
    };