import React from "react";
import bookingImg from "./booking-img.jpg";
import Form from "./form";


function Booking() {

    return <div className="booking-div">

        <h2>Thanks for booking with Caribbean Vybe!</h2>

        <p>Your reservation number is: </p>

        <p>You will recieve an email with a secure link to view and make your payment.</p>

        <div className="booking-data">
            <br/><br/>
            <h4>Your Booking details: </h4>

            <p>Name: {Form().props.name}</p>
            <p>Email: </p>
            <p>Rooms: </p>
            <p>Adult: </p>
            <p>Children: </p>
            <br/><br/>
        </div>


        <img src={bookingImg} alt="" className="booking-img"/>

    </div>
}


export default Booking;