import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import ProfileSettingForm from '../pages/ProfileSettingForm';
import LogEntry from '../pages/LogEntry'

const newLocal = '/profile';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
    
  },
  {
    path: '/profile',
    element: <ProfileSettingForm />,
  },
  {
    path: '/logentry',
    element: <LogEntry />, 
  }
]);

export default router;
