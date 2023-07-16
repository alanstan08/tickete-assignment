import React from "react";


const date = new Date();


    

function FinalTicket(){
    return(
        <div className="Ticket">
             <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Bugsworth_058069.jpg" alt="Woman and baby" />
             <h1>Boat Canal Cruise- Live</h1>
             <p className="TicketImage"> 
             <img src="https://static.vecteezy.com/system/resources/previews/015/117/381/original/ticket-icon-in-white-colors-voucher-signs-illustration-png.png" alt="ticket" />
                full name
            </p>
             <p className="CalendarImage">
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEUAAAD////4+PhPT0/y8vIgICDe3t48PDwZGRlAQEC+vr45OTlMTEy4uLipqaloaGiioqLU1NSAgICKioqRkZF1dXXKyspHR0cyMjLn5+ddXV3ExMSYmJgRERFjY2NYWFgqKirYGgVgAAACxUlEQVRoge2b7ZqqIBCACdE+1gqyVcncvP+r3FBMmTDFNT3Pad5fNTq9ZIkDIlktB3mxjfEwSW6cjvtkGX35fnoKRrnjgpT4cow63lTZZDfCLbWakHSMu04meWfTu938kU327upDk311d3tN9sndfWqyL+7usMn+dnd/N9keutH9cMtz4m9aEPHs3pPNQMreBLjjdrafnGXtjgjE6h6M1Q2IKvflOfv9bnXWk3YvMKf73mGRwJY9h/tuvi7mvpJkMXdC8sXcVvNM7g7Q/Vnu2HSf3NyqvGv1ljc3d2a2XFV71j7Ijtq9VWlGbm61u2jeSrMpfaifSDZv1Q+4G55dVuSPw6a+Bx2eTHy2ahXJZYn8fJnuRh10fdzyw2pl1Nv9cJWRrdXLtByW0K1DdlFVNYEQ1XhKbvpzGnI9CJNSj+WcWl7+ORuYS7vvFOY4KHPLJrfWAFKsHZOJnzXZlPfvD8gjwe6HjDLh8Bdv+NlJxihjAbdepXspbpeLV4xKLdO327TjQokgyIeQiGAuBOzovJGzhyOgHrrRjW509yHAB/EqDKeQWpPo07lh6f1TheHQMZnDfbS7Q3SjG93oRnc/UKLvZ8EJtdZN0QmvocKEvQ5P63YG3eiuydKvNqmepotBWC+CECB8qMKyMMMD6zU45xtVYTiBrhdBTFuvQfe5CsOZyQ733/o1dKMb3ej+39xQwu2SyC7R9Rq8LTWwXqM7E72FZma4rsDcwj3ud4Puf8xNTSYN97jjrYmu14QZXetwAMK6jJMgzIe5O+q1jr4FhvWJDE/77Tj3p/Sp6EY3utH9DjccaHe4o5duuGjMG+amu71BvQWE2ahwj/vdoBvdi7lDyeZCPlbd6sVt+Xo+aiUJyVKE9ucNZuFKZP9Ob0ISp+W6UxKp52qOi6iP1fNE1/kXcuZqPr16joonhT8fRcIfz1EtxS9oOlrQEOp6owAAAABJRU5ErkJggg==" alt="calendar" />
                 {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
             </p>
             <p className="TimeImage">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsocYGKTtgtPJlm9ljz91PjuK1FbX8PDFaDraXQLsqFw&s" alt="time" />
                 {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
             </p>
             <div className="BorderTiny"></div>
        </div>
    )
}

export default FinalTicket;