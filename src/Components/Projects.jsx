import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

function Projects() {
    return (
        <div>
            <h1>What else can be a better way to hone your skills ?</h1>
            <details className={styles.det}><summary>How i make my projects ? (click me)</summary>It takes a lot of effor !<br/>
            And you need to be really focused on your goal and decide on the plan before taking action.
            </details>
            <h3>Belows are some projects:</h3>
            <ProjectCard  title="Online tutor" detail="This project was done last year and helps people to find tutors online."/>
            <ProjectCard  title="Watch" detail="This project was done in collaboration and produced a UI home page for Sotana"/>
            <ProjectCard  title="Black" detail="This project gives blind people dicrections on sensation."/>

        </div>
    );
}

export default Projects;
