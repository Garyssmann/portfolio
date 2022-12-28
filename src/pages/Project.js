import React from 'react';
import {useParams} from "react-router-dom";

import img from "./../img/projects/02-big.jpg";
import {projects} from "../helpers/projectsList";
import BtnGitHub from "../component/btnGitHub/BtnGitHub";


const Project = () => {
    const {id} = useParams();
    const project = projects[id];
    return (
        <main className="main">
            <section className="projects">
                <div className="projects__container">
                    <div className="projects-details">
                        <h1 className="projects-details__title title">{project.title}</h1>
                        <img src={project.imgBig} alt="{project.title}" className="projects-details__cover"/>
                        <div className="projects-details__descr">
                            <p className="">Skills:{project.scills}</p>
                        </div>
                        {project.gitHubLink && (<BtnGitHub link="https://github.com"/>)}

                    </div>
                </div>
            </section>
        </main>


    );
};

export default Project;