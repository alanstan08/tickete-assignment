import React, { useState } from "react";

function Faq() {
    const [isExpanded, setExpanded] = useState(false);
    function expand() {
        setExpanded(!isExpanded);
      }
      
    
    return (
        <div className="FaqContainer">
            <div className="FaqSubContainer">
                <div className="FaqFirstColumn">
                    <h1>Frequently asked questions</h1>
                    <button onClick = {expand} type="button" className="collapsible"><h2>Are my tickets transferable?</h2></button>
                    <div className="content">{isExpanded && <p>No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you’re booking for friends and family, make sure to key in their details.</p>}</div>
                    <div className="BorderLineSmall"></div>

                    <button onClick = {expand} type="button" className="collapsible"><h2>How long will it take to receive my ticket?</h2></button>
                    <div className="content">{isExpanded && <p>The tickets will hit your inbox as soon as you complete making the payment.</p>}</div>
                    <div className="BorderLineSmall"></div>

                    <button onClick = {expand} type="button" className="collapsible"><h2>Is my payment secure?</h2></button>
                    <div className="content">{isExpanded && <p>We use a PCI compliant payment gateway that is internationally recognized and protects against fraud and unauthorized transactions. In short, your payment is a 100% secure and you have nothing to worry!</p>}</div>
                    <div className="BorderLineSmall"></div>

                    <button onClick = {expand} type="button" className="collapsible"><h2>What type of payment options do you offer?</h2></button>
                    <div className="content">{isExpanded && <p>We accept payments via all major international debit cards, credit cards, Google Pay and Apple Pay. Please note that Tickete being an online marketplace does not accept cash payments.</p>}</div>
                    <div className="BorderLineSmall"></div>

                    <button onClick = {expand} type="button" className="collapsible"><h2>When will I be charged for my booking?</h2></button>
                    <div className="content">{isExpanded && <p>Your account will be charged immediately upon booking. If the booking is cancelled from your end or by our local tour operator, we will refund the entire amount to your account at no extra cost.</p>}</div>
                    <div className="BorderLineSmall"></div>

                    <button onClick = {expand} type="button" className="collapsible"><h2>Why am I being charged in USD?</h2></button>
                    <div className="content">{isExpanded && <p>All payments on Tickete are charged in USD. Your accounted will be debited with the spot rate for the conversion rate from your local currency to USD. We understand this is less than ideal but, we’re working on accepting payments in currencies across the world.</p>}</div>
                    <div className="BorderLineSmall"></div>

                    <button onClick = {expand} type="button" className="collapsible"><h2>Will I get a complete refund if I cancel this ticket?</h2></button>
                    <div className="content">{isExpanded && <p>The cancellation and refund policy varies per ticket. While some can be canceled up to 24, 48, or 72 hours before they start, several others can’t be canceled once the reservation has been confirmed. For the ones that can cancelled within the permissible cancellation period, you will receive a full refund.</p>}</div>
                    <div className="BorderLineSmall"></div>

                    <button onClick = {expand} type="button" className="collapsible"><h2>How long does it take for a refund to reflect in my account?</h2></button>
                    <div className="content">{isExpanded && <p>Depending on your bank, it typically takes anywhere between 2-7 working days for the refunded amount to reflect in your account.<button type="button" class="collapsible"></button></p>}</div>
                    <div className="BorderLine"></div>
                </div>
                <div className="FaqSecondColumn">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/356/576/small/1__2825_29.jpg" alt="" />
                    <h1>Need Help?</h1>
                    <p>We're here to help, 24*7</p>
                    <button>Chat with us</button>
                </div>
                
            </div>
            

            <div className="TicketPromise">
                <div>
                    <img src="https://img.freepik.com/premium-vector/green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration_685751-503.jpg" alt="" />
                    <h1>Official tickets</h1>
                    <p>Authorised reseller to top attraction</p>
                </div>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/356/576/small/1__2825_29.jpg" alt="" />
                    <h1>24/7 dedicated support</h1>
                    <p>We're here to help, talk to an expert</p>
                </div>
                <div>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDg0NDQ0ODQ0ODQ4NDQ0NDQ8NDQ0NFREXFhURFRMYHSggGBolGxMVITEhJiorLi4uFx81OjM4OigtLisBCgoKDg0OGxAQGC0lICYtKy4rLS0rMDI1LjIrMi4tLSstLS0rLS0rLS0rLTctKy0xNSstLy0tLS0tLS0tKysrLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EAEIQAAIBAgIECQgIBAcAAAAAAAABAgMRBAUGEiExMkFRVHGTwdHSExZCYXKBkbEHIjNDUoKSoRQjU+EVNGJjc4Oi/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEEAgMFBv/EADARAQABAgMHAwIFBQAAAAAAAAABAgMEEVESFCExUqHRBRMVImFBcZGx8DJCgcHh/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABihiKcm4xnCUlvSkm/gBlAAAAAABjq16cGlOcYt7lKSTYGRMAAAAAAAAAAAAAAAAAAAAAABx9MMZLD5dja0HaUKE3F8jsB8byLG4jD4rLa/lJ/z68Yyu3Zp3XaB9610A8ouUBrrlAnWQEgAPiOl+Kr4nM8elUko4ZR1Um0kkv7gfSPo4x08TleFqVJa07Sg2971XYD0wAAAAAAAAAAAAAAAAAAAAIcrAeU+knEJZRj1fa6LX7oD55mGG8nhtHqn4sRTv+pAdahpxjZJxUaK1ZSSvGbdk/aKFeKricuD0Nj0qxXTEzM/r/xk87cc/Sprop97NU4u4sx6RhtJ/VK0ox39WKXqpx7iN6uas/isL095Q9KMfxV7f9dPuI3m7qzj0rC9HefKvnRmHOZfop+EjebuqfjML0d58tbHaXZjCEn/ABL3P7ul4TKnEXZ/FruenYWmP6O8+Wvk9H+IxWfTltaop39eojqRyeTq5y19G9JMXgsHg6dCajGUa7kpQjJOSrSV9pWxFyqiY2XV9Nwtq9E+5H46u/R0+x8eHGhUXsSi/imV4xdf45OjV6PYnlMx/l3co0/oVZRp4im6EpOylra9Nvp3o30YqJ4VRk59/wBIrojOic3r6OIjNJxaafGmWonPk5M0zTOUspKAAAAAAAAAAAAAAADHUqJAcnMs0jST23la6V+LlfIjXXcilYsYeq7PDlq+R6b6SVK9bE4bXbpRwU01xSrScJLZyKOxdLNVuuZqzlbv2Ypt7NMMukOPj/h+j9t8KkJv8skWZc2mM5yaGWK6cuWTfxZx7s8Xs8LGVEOjA0reSzYIgDIA5+cQvTl0M2W+aviI+lv6GZhHymdyfp4a690Ejs0znDxN2nZrmHncsq69LCx/BGr/AOqrZSxUu36TRlEzq60kUXelgqIlhL0mi+lU8PVjTrO9KerFyu/qyskpte7ayzZvTRPHk5uOwcXqPpj6o5ff7eH1bC1tZHSeYZwAAAAAAAAAAAAAYqtSwHCzbNVTTSa1rbW90VyvuNVy7FP5reGws3Zznl+75vpFpA5N06cm23Zu+2TKFVU1S71u3Tbh5LHUfK1q1RbVOVWz9V9i+FjOK8paqrW1T+cJryqVaWEovdQ3v9y1cu0xRwcnDYWub0RMO9gqWrCK47K5yqp4vWWoyphsoxblgASBDDiaevFr1E0zlLGuM4yeewU6lCWJstlalqfHf8jq2bsbPF5HG4av3c4jmzZJhnBK/owV+naUr9ecu5gLWxTETo6kjQ6EsMyWMsMkSxl9e0JxzrYWhJu8lHUk+WUXq9h1bFW1REvJY637eIqiPz/Xi9QbVQAAAAAAAAAAAFZysgPP53mipJpOzttf4V3mq7c2Y4c1vC4abs5zy/d8x0iz9yvCD2bbvjb5ShVVm9BRRFEPJqs3OMuSUX+45E8XSwcFZJq65HcwmW6inOMm/Sw1NO9pt8kpRcV7lFP4tmG1o3Raz5z2/f8AkNpGCwuiEpAAQwKsIYZ4Wm3rS1ov/RKK1ulSi/2sbIq1V6rec8J7I1UuCrcfvImc2ymmKYY5EJlimSxliZLF9D+jWtejOP4a0kuhxi+1nQwk/RP5vOer05XonWPL6Ci05SQAAAAAAAAAAB5/TLO1gMLOskpTbVOlF7nUe6/q2Nmq7c2Kc1rCYf3rmU8o4z/Pu+I4/M8XiZOVWtN3bdk3GK9yKEznxl6GKdmMqeEfZqKlJ75SfTJsZwnZnVno0DGZZ00OlhqXG9xhLfTGTagYN8MqIZLEJTcCLgAgattJY55scncDFJkkscmSxYZslioEPc/RrLZXX+5F/GP9i/hOUuB6zH10T9pfS4bkW3GSAAAAAAAAAAGB4L6SMtxWMjh6eGpOqo1JzqWnCNnq2jwmr8ZWxFFVWWzDp+nX7Vra25yzy/28StDsz5pLraHiK3sXNHT37DdfafCy0PzPmkutoeIexc0N/wAN19p8M1LRHMePCT6yj4iPYuaMvkMN1dp8NhaL5lzOdv8Ako+IicPc0Zx6jhY/v7T4ZI6MZlzOfWUfERu1zRn8nhevtPhdaNZjzOp+uj4yN2u6J+UwvX2nwnzbzHmdT9dHxjdruh8phevtPg828x5pU/XR8Y3a7on5TC9fafB5t5jzSfWUfGN2u6I+UwvX2nwjzbzHmk+so+Mbtd0PlML19p8IejWY80n1lHxjdruiPlML19p8KvRnMuaT6yh4yd2uaHymF6+0+FHovmXNJ9ZQ8Y3a5oxn1PDdXafDG9FMz5pPraHjJ3e5oj5PDdXafCj0SzPmkutoeMbvc0R8lhurtPhHmjmnNJdbQ8ZO73ND5LDdXaXqNB8pxOElVWJpOk5uDgnKEtZK9+C3yotYa3VRE7UOR6niLd6afbnPLN9AhuRZcxYAAAAAAAAAAhgcye2cvd2gXjEC6gBZRAyIAAAi4EXAi4C4EXAXAi4C4EXAhsDBU+0p9EuwDqQ3ICwAAAAAAAAAAYHPUfrz/L2gZlECyQEgQAAqBAACAIAgABFwIuAuBDYGGT/m0+iXYB1o7gJAAAAAAAAAAAGol9efRHtAyWAAAIAgCrAq2BDYEawEXAXAXAi4EXAi4EXAwt/zafRL5oDsx3ASAAAAAAAAAAANf059Ee0CwEAQ2BFwIbAq2BRsCjYEXAXAm4C4EAQAAiwGCf21P2ZfNAduG5ASAAAAAAAAAAANf7yfsx7QJbAq2BDYEXAi4FWwKMCrAgAAuAuAAICQFgNWs7Vqfsy+aA7VJ7EBcAAAAAAAAAAAa3pz6I9oEtgY2wIuBFwFwKtgVYFWBUABIAAAQFkBawGji3atS9l/MDtUOCgMoAAAAAAAAAAA1Vw6nRHtASAxyAi4EALgQBDAowIAAAAACUBkiBewHNx/29L2H8wO1huCgMwAAAAAAAAAAA1I/aVOiPaBMgMUgKgLgAIAhgVYEAAAAABMQMsEBksBy8f/AJmmuSlf4yfcB28NwUBlAAAAEASAAAAAGpa1SfrjH9m+8CZAYpAVAgAAAMCjAgAAAASBaKAzQQGSwHIqvXxUrehGMPfvfzA7lBbAMgAAAAAAAAAAA1quyonyprt7AEkBjkgKNAQAAAAKMCAFgFgJsBOqBeEQMVTHwg7Wb9S3gamPz2FP6kI61Z+i3wPXK27oArlFJ8KW2Td23xt72B6CmtgFgAAAAAAAAAABr4uOy63ragNZY6LlCDTUpPV4tVOze/3fuBmaAq0BFgIsBFgFgKtARYCbATYCbAWUQKYyoqdOUm1H6r2tpJetsDyGJzOU24Ye/JKu19Z+wuLp3gZcswFnd7W3dt7W2B6rA0bJAdBASAAAAAAAAAAAKzV0Bx8dQe9bwFDNI8GteD/Fa8X3AbtOrCfAnGXsyTAu4gVsBFgFgKtARYCbASkAnKMFeclFcsmor4sDm4vSDDU7qDdefFGltjf1z3fMDz+KliMZLWqu0L3jSjwI979YG/g8ttbYB2cLhbcQHTpQsBlAAAAAAAAAAAAABr1qVwNCtgk+IDRqZTF+igKLKmtzkuiTQGSOWz/qVOsn3gZY5bU/q1utn3gZFlMnvq1utqd4F1lMl97V62feAeWyX3lTrJ94FJ5fP8dT9cu8DXqZZN+nN/nkBrvIYt3au+V7QNijk0VxAbtLL0uIDbp4ZLiAzxp2AyAAAAAAAAAAAAAAAAKuKAjyaAeTQE6iAmyAkAAAiwDVQDVXIA1UAsBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z" alt="" />
                    <h1>Flexible bookings</h1>
                    <p>Book stress-free with easy cancellation</p>
                </div>
                <div>
                    <img src="data:image/png;base64,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" alt="" />
                    <h1>100% secure payments</h1>
                    <p>Internationally recognized encrypted payment process</p>
                </div>
                
            </div>
        </div>

    )
}
export default Faq;