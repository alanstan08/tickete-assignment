import React from 'react'
import Header from './Header.jsx';
import Details from './Details.jsx';
import AdditonalInfo from './AdditionalInfo.jsx';
import Payment from './Payment.jsx';
import Faq from './Faq.jsx';
import Footer from './Footer.jsx';
import FinalTicket from './FinalTicket.jsx';
import TicketOverview from './TicketOverview.jsx';
function App() {
    return (
        <div className='AllElements' >
            <Header/>
            <div className='TopPart'>
                <Details/>
                <FinalTicket/>
                
            </div>
            <div className='MiddlePart'>
                <AdditonalInfo/>
                <TicketOverview/>
            </div>
            <Payment/>
            <Faq/>
            <Footer/>
            
            
        </div>
    )
}
export default App;