import React from 'react';


import Project from "../component/project/Project";
import {projects} from "../helpers/projectsList";

const Projects = () => {
    return (
        <main className="main">
            <section className="projects">
                <div className="projects__container">
                    <h2 className="projects__title title">Projects</h2>
                    <ul className="projects__list">
                        {projects.map((project, index) => {
                            return <Project
                                key={index}
                                title={project.title}
                                img={project.img}
                                index={index}
                            />
                        })}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Projects;