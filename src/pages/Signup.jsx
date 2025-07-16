import ShowPassword from '../components/AuthPage/ShowPassword';
import '../css/Signup.css';
import Inputbox from '../components/AuthPage/Inputbox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(){
   const navigate = useNavigate();
    // state to manage focus on confirm password input
     const [confirmFocus, setConfirmFocus] = useState(false);
     // state to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    // data for the form
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });

    navigate('/login'); // Redirect to login page after successful signup
  }
    return(
        <>
      

            {/* form section*/}
            <div className="container2">
                <div className='form-desc'>
                    <h5>Manage your diabetes with ease.</h5>
                </div>

                <div className="form-part">
                   <div className='form-inner'>
                    {/* Form description section */}
                    <div className="form-textdesc">
                         <h3>Join DiabetesTracker for free</h3>
                        <p>Experience a seamless health tracking journey</p>
                    </div>
                   
                   {/* Form section */}
                   <div className="form">
                     <form action="" onSubmit={handleSubmit}>
                        <Inputbox type="text" placeholder="Enter Username" value={formData.name} onChange={handleChange} name="name"/>
                        <Inputbox type="email" placeholder="Enter Email Address" value={formData.email} onChange={handleChange} name="email"/>
                        <Inputbox type={showPassword ? 'text' : 'password'} placeholder="Enter Password" value={formData.password} onChange={handleChange} name="password"/>
                        <Inputbox type={showPassword ? 'text' : 'password'} placeholder="Confirm Password" 
                        value={formData.confirmPassword} onChange={handleChange} name="confirmPassword"
                         onFocus={() => setConfirmFocus(true)}
                         onBlur={() => setConfirmFocus(false)}/>

                        {/* Error message for password mismatch */}
                        {confirmFocus && formData.confirmPassword &&formData.password !== formData.confirmPassword && (<p className="error-message">Passwords do not match</p>)}

                        {/* Show password toggle */}
                        <ShowPassword showPassword={showPassword} setShowPassword={setShowPassword} />

                        {/* Submit button */}
                        <button type='submit' >Sign up</button>
                        
                     </form>
                   </div>
                   </div>
                </div>

             
            </div>
     
        
        </>
    )
}
export default Signup;