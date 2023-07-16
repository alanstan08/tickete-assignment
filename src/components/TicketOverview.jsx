import React from "react";

const date = new Date();

function TicketOverview(){
    return (
        <div className="FullArea">
           <div className="FirstArea">
                <div className="ColumnOne">   
                    <h1>Ticket overview</h1>
                    <p>PAX TYPE</p>
                    <p>PAX TYPE</p>
                    <p>fee</p>
                    <p>discount applied</p>
                </div>
                <div className="ColumnTwo">
                    <br />
                    <p>price</p>
                    <p>price</p>
                    <p>price</p>
                    <p>-price</p>
                </div>

            
            </div>  

            <div className="BorderTiny"></div>
            
            <div className="SecondArea">
                <p>Have a promo code?</p>
            </div> 

            <div className="BorderTiny"></div> 

            <div className="ThirdArea">
                <div className="FirstColumn">
                    <h2>Total</h2>
                    <p>You will pay in currency</p>
                </div>
                <div className="SecondColumn">
                    <p>price</p>
                </div>
            </div>

            <div className="BorderTiny"></div> 

            <div className="FourthArea">
                <div>
                <h3>Free cancellation</h3>
                <p>Cancel before {date.getDate()}-{date.getMonth()}-{date.getFullYear()} for a full refund</p>
                </div>
                
            </div>

        </div>
        

        
        
    )
}

export default TicketOverview;