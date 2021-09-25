import React from 'react';

function Contact() {
    const[messg, setMessg] = React.useState("Your message will display here !");
    return (
        <div style={{paddingLeft:'10px'}}>
            <h2>Get in touch with me </h2>
            <h4>Address:</h4>
            <p>Plot no: 1234 Local street , City, INDIA</p>
            <h4>Contact no:</h4>
            <p>+91 3400 45006 000000</p>
            <div style={{position:'absolute',top:'80px',left:'410px'}}>
                YOUR MESSAGE <div style={{border:'solid 2px green',height:'250px',width:'250px',overflow:'auto',padding:'5px'}}>{messg}</div> 
            </div>
            <p style={{color:'red'}}>Send me a message !!</p>
            <input type="text" onChange={e => setMessg(e.target.value)} placeholder="type your message here"/><button>SEND</button>
        </div>
    );
}

export default Contact;
