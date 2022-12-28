import React from 'react';
import {NavLink} from "react-router-dom";
import "./style.css";


const Project = ({title, img, index}) => {
    return (
        <NavLink to={`/project/${index}`}>
            <li className="projects__item">
                    <img
                        className="projects__img" src={img} alt={title}/>
                    <h3
                        className="projects__text">{title}</h3>
            </li>
        </NavLink>
    );
};

export default Project;