
import React from 'react'
import './navbar.css'

import { Link } from 'react-router-dom'
const Navbar=()=>{

    return(

        <div className="navbar">
           <div className="navlist">
              <li>project</li>
              <li>contact</li>
              <Link to='/login'><li>Login</li></Link> 
             <Link to='/signup'> <li>sign</li></Link>
           </div>
        </div>
    )
     
}

export default Navbar