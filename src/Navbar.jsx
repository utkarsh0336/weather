import React from 'react'
import { Link } from 'react-router-dom'
import  './Navbar.css'
import { logoutAction } from './redux/slices/users/usersSlice'
import { useDispatch } from 'react-redux'
const Navbar = () => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const logoutHandler = () => {
        dispatch(logoutAction());
        //reload
        window.location.reload();
      };
    const isLoggedIn = user?.token ? true : false;
  
  return (
    <>
    {!isLoggedIn && (
        
    
    <div className="top">
       
      <h2>  <Link to="/login">Login</Link></h2>
        <h2><Link to="/register">Signup</Link></h2>
    </div>
 )}


                        {isLoggedIn && (
                          
                          <div className="top">
                            <button onClick={logoutHandler}>
                              
                            <h2>Logout</h2>
                            </button>
                        </div>
                        )}
                    
                    
                    


</>
  )
}

export default Navbar
