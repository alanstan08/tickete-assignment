import React from "react";

function AdditonalInfo() {
    return (
        <div className="Info">
            <h1>Additonal Information</h1>
            <p>We need a few more details to complete your reservation</p>
            <div className="InfoAdd">
                <input type="text" placeholder="Full Name"/>
                <label for="City"></label>
                <select name="City" >
                    <option value="Ernakulam">Male</option>
                    <option value="Kochi">Female</option>
                    <option value="Thirvananthapuram">non-binary</option>
                    <option value="Aluva">other</option>
                </select>
            </div>
            <div className="PaymentContainer">
            <h1>Select your mode of payement</h1>
            <p>Payments with Tickete are secure and encrypted</p>
            <option>Credit Card</option>
            <div className="InputContainer">
                <input type="text" placeholder="Name on Card"/>
                <input type="number" placeholder="Card Number"/>
                <input type="month" placeholder="Expiry Date"/>
                <input type="password" placeholder="CW/CVC" maxLength="3"/>
            </div>
            <div className="BorderLineSmall"></div>
            <br />
            <option>Klarna</option>
            <div className="BorderLineSmall"></div>
        </div>
            
        </div>
        

    )
}
export default AdditonalInfo;