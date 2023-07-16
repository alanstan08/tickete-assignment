import React from "react";

function Details() {
    return (
        <div className="ConfirmPay">
            <h1>Confirm and pay</h1>
            <div className="TwoHeading">
                <h2 >Enter your details</h2>
                <p>We'll be sending your tickets below. Booking for a friend? Add their details</p>
            </div>
            <div className="InputContainer">
                <input id = "input1" type="text" placeholder="Full Name" />
                <input id = "input2"type="text" placeholder="Full Name" />
                <input id = "input3" type="number" placeholder="Phone Number" />
                <input id = "input4" type="text" placeholder="Full Name" />
            </div>
            
        </div>

    )
}
export default Details;