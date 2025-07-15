import '../css/Home.css';
import Button from '../components/landingBtn/Button';
import Card from '../components/landingBtn/Card';
import { Link } from 'react-router';
function Home(){
  

    return (
        <>
        <div className="home-container">
          {/*Diatrack Logo */}
            <div className='diatrack-logo'>
       
                <img src="/diatrack.svg" alt="Diatrack Logo" />
                
            </div>
             
             {/* Text Description */}
            <div className='text-intro'>
                <div className="text-container">
                    <h1>Manage Your Diabetes with Ease</h1> 
                    <br />
                    <p>Track and monitor your blood sugar levels, medications, and <br />more.</p>
                </div>
            </div>

            {/*Button */}
            <div className='button-container'>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <Button />
                </Link>
            </div> 

            {/* Cards */}
            <div className='card-container'>
                <Card purpose='Blood Sugar' number='127'unit='mg/dL' use1='Blood Sugar'use2='Tracking' desc1='Easily log your blood sugar' desc2= 'levels and monitor trends'desc3= 'changes over time'/>
                <Card purpose=' Next Appointment' number='7' unit='days' use1='Medication 'use2='Mangagement' desc1='Keep track of your diabetes' desc2= 'medications and receive ' desc3= 'reminders'/>
                <Card purpose='Total Daily Dose' number='250' unit='mg' use1='Reports &'use2='Insights' desc1='View trends and analytics '  desc2= 'to better understand your' desc3='diabetes'/>               
            </div>
        </div>
        </>
    );
}
export default Home;