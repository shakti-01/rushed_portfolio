import React from 'react';
import styles from './EducationBar.module.css';
function EducationBar(props) {
    return (
        <div className={styles.edubar}>
            <p>Qualification: {props.qua}</p>
            <p>Score achieved: {props.score}</p>
        </div>
    );
}

export default EducationBar;
