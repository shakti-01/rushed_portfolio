import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Disclaimer: The provided details on this page are not accurate / appropriate.<br/>
            You are adviced to not refer to any of the details on this page.<br/>
            The information provided in this page are dummy info.<br/>
            <i class='far fa-copyright'></i> All rights reserved.
            </p>
        </footer>
    )
}

export default Footer;
