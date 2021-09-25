import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard(props) {
    return (
        <>
        <div className={styles.card}>{props.title}<br/>{props.detail}</div>
        </>
    )
}

export default ProjectCard;
