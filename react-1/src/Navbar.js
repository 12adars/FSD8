import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div id="div">
           <NavLink to='/'><p>ColorChange</p></NavLink> 
           <NavLink to='/about'><p>About us</p></NavLink> 
           <NavLink to='/contact'><p>Contact</p></NavLink> 
           
            <button>Search</button>
            <NavLink to='/login'><p>Login</p></NavLink>
            <NavLink to='/sign'><p>Sign up</p></NavLink>
        </div>
    </div>
  )
}

export default Navbar