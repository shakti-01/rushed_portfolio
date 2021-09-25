import React from 'react';
import styles from './AboutData.module.css';

function AboutData() {
    const[num, setNumber] = React.useState(1);
    const[content] = React.useState('I have worked at lots of orginizations and designed UI for major companies. I am well versed in my skillset. Im planing to become a freelancer to get more flexibility in my workflow and to give time to my other interests. My skills include graphic designing, illustrator, UI/UX designer, devOPs engineer, AI researcher. ');
    return (
        <div>
            <p className={styles.abtinfo}>{content}
            <span>How much would you like to rate my skillset on a scale of 1 to infinity ??</span>
            </p>
            <div className={styles.rating}>MY RATINGS: {num}
            <button onClick={()=>{setNumber(num+1)}} >More !!</button>
            </div>
        </div>
    );
}

export default AboutData;
