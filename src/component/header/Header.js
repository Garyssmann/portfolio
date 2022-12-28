import React from 'react';
import "./style.css";
const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__box">
                    <h1 className="header__title">
                        <strong>Hi,my name is <em>Igor</em></strong><br/>
                        a frontend developer
                    </h1>
                    <div className="header__text">
                        <p>with passion for learning and creating.</p>
                    </div>
                    <a href="#!" className="btn">Download CV</a>
                </div>
            </div>
        </header>
    );
};

export default Header;