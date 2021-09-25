import React, {useEffect} from 'react'
import AboutData from '../Components/AboutData';

function About() {
    //Componentdidmount
    useEffect(()=>{
        console.log("About page mounted on DOM");
    })
    //for component did unmount
    useEffect(()=>{
        return() => console.log("About page unmounted [lifecyle is only done for about page component]")
    })
    return (
        <div>
            <AboutData/>
        </div>
    )
}

export default About
