import React from 'react';

const Contacts = () => {
    return (
        <main className="main">
            <section className="projects">
                <div className="projects__container">
                    <h1 className="title">Contacts</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="scills__title">Telegram</h2>
                            <p className="scills__text"><a href="https://t.me/Garyss_Mann"
                                                           target="_blank">Garyss_Mann©</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="scills__title">Call</h2>
                            <p className="scills__text"><a href="tel:+380993603612">+38(099)360-36-12</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="scills__title">Email</h2>
                            <p className="scills__text"><a href="mailto:garyssmann@gmail.com">garyssmann@gmail.com</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Contacts;