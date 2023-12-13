import { useEffect} from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'

function PrivateRoutes() {
  const nav = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to the home page if there is no token
      nav('/');
    }
  }, []);

  return <Outlet />;
}

export default PrivateRoutes