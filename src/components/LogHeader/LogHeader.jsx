import './LogHeader.css';
import { Link } from 'react-router-dom';
function LogHeader() {
  return (
    <>
        <div className="log-header">
            <div className='sec-contain'>
                <div className="logoImg">
                <Link to="/"><img src="./dialogo.svg" alt="diatrack logo" className='logo-img'/></Link>
            </div>
            <div className="navlinks">
                <ul>
                 <li ><Link className='list'> Dashboard</Link></li>
                 <li><Link to="/logentry" className='list'>Log Entry</Link></li>
                 <li><Link to="/history" className='list'> History</Link></li>
                 <li><Link to="/trends" className='list'>Trends & Analytics</Link></li>
               </ul>
                
            </div>
            <div className="userImg">
                <img src="./user.svg" alt="" className='user-img'/>
            </div>
            </div>
        </div>

    </>
   
  );
}
export default LogHeader;