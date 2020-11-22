import React from "react";

function Footer () {
    return (
        <footer>
        <div className="copyright">© SkillDrive Inc. 2020</div>
        <nav className="social_bar">
            <ul className="menu_social">
                <li className="social_icon">
                    <a href="https://vk.com" target="_blank" className="social_link icon-vk" aria-label="Переход на страницу SkillDrive в ВКонтакте"></a>
                </li>
                <li className="social_icon">
                    <a href="https://instagram.com" target="_blank" className="social_link icon-instagram" aria-label="Переход на страницу SkillDrive в Инстаграм"></a>
                </li>
                <li className="social_icon">
                    <a href="https://facebook.com" target="_blank" className="social_link icon-facebook" aria-label="Переход на страницу SkillDrive в Фейсбук"></a>
                </li>
            </ul>
        </nav>
    </footer>
    );
}

export default Footer;