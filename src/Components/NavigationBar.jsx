import React from 'react';
import styles from "./NavigationBar.module.css";
import {Link} from 'react-router-dom';

function NavigationBar() {
    return (
        <div>
            <ul className={styles.navlist} >
                <Link to='/contacts'>
                <li className={styles.navop} >Contact</li>
                </Link>
                <Link to='/projects'>
                <li className={styles.navop} >Projects</li>
                </Link>
                <Link to='/education'>
                <li className={styles.navop} >Education</li>
                </Link>
                <Link to='/'>
                <li className={styles.navop} >About</li>
                </Link>
                <li className={styles.myname}>SHAKTI PRASAD NANDA</li>
             </ul>
        </div>
    );
}

export default NavigationBar;
