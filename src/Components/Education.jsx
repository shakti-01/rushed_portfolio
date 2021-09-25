import React from 'react';
import EducationBar from './EducationBar';

function Education() {
    return (
        <div>
            <h1>Read. Learn. Implement.</h1>
            <h3>My timeline as of now:</h3>
            <EducationBar qua="B.Tech [CSE]" score="97%"/>
            <EducationBar qua="12th standard" score="96%"/>
            <EducationBar qua="10th standard" score="99%"/>

        </div>
    );
}

export default Education;
