import '../css/Login.css';
import Inputbox from '../components/AuthPage/Inputbox';
import ShowPassword from '../components/AuthPage/ShowPassword';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){
    // state to manage login details
    const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    // function to handle input changes
    const handleLoginChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value
    });
  };

  // function to handle form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', loginDetails);
    setLoginDetails({ email: '', password: '' });   

    navigate('/profile'); // Redirect to profile page after successful login
  }
  // state to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    
     
    return(
        <>
            <div className="login-container">
                <div className="main-container">

                   <div className="center">
                     <p>Welcome Back</p>
                     <h3>Sign in to your account</h3>

                    {/* Login Form section */}
                    
                        <form onSubmit={handleLoginSubmit}>
                            <Inputbox 
                            type="email" 
                            placeholder="Email"
                            value={loginDetails.email} 
                            onChange={handleLoginChange} 
                            name="email"/>

                            <Inputbox type={showPassword ? 'text' : 'password'}  
                            placeholder="Password"
                            value={loginDetails.password} 
                            onChange={handleLoginChange} 
                            name="password"
                         />
                        
                    

                    {/* Show password toggle */}
                    <ShowPassword showPassword={showPassword} setShowPassword={setShowPassword} />
                    
                    {/*Login Submit button */}
                    <button type='submit' className='form-button'>Login</button>
                    </form>
                   </div>
                </div>


            </div>

        </>
    )
}
export default Login;