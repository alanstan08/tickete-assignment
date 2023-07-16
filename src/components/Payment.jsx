import React from "react";

function Payment() {
    return (
        <div className="PayementCart">
            <h1>Total </h1>
            <p >You will pay in rupees</p>
            <div className="Notification">
                <input Type="radio"/>
                <label>Receive travel tips, suggestions and offers in city by email</label>
            </div>
            <p className="TermsAndConditions">With payment, you agree to the general <span>terms and conditions of Tickete</span> & the <span>activity provider</span>.</p>
            <div className="ConfirmAndPay">
                <button>Confirm and pay </button>
            </div>
            <div className="BorderLine"></div>
        </div>

    )
}
export default Payment;