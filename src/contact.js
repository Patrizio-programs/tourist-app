import React from "react";
import img from "./contact-img.jpg"



function Contact() {

    return <div className="contact-div">

        <h2>Contact Caribbean Vybe!</h2>

        <br></br>
        <div>
            <p>You can contact us via email: caribbean-vybe@gmail.com</p>
            <p>Or by phone: 1876-786-3333</p>
        </div>

        <img className="contact-img" src={img} alt=
        ''/>
    </div>
}

export default Contact;