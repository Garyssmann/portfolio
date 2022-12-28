import React from 'react';
import "./style.css";
import vk from "../../img/icons/VK.svg";
import instagram from "../../img/icons/Instagram.svg";
import twitter from "../../img/icons/Twitter.svg";
import git from "../../img/icons/Github.svg";
import link from "../../img/icons/LinkedIn.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__box">
                    <ul className="social">
                        <li className="social__item"><a href=""><img src={vk} alt=""></img></a></li>
                        <li className="social__item"><a href=""><img src={instagram}
                                                                     alt=""></img></a></li>
                        <li className="social__item"><a href=""><img src={twitter} alt=""></img></a>
                        </li>
                        <li className="social__item"><a href=""><img src={git} alt=""></img></a>
                        </li>
                        <li className="social__item"><a href=""><img src={link}
                                                                     alt=""></img></a></li>
                    </ul>
                    <div className="copiright">
                        <p className="">© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;