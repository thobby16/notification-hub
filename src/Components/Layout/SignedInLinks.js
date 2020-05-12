import React from 'react';
import { NavLink} from 'react-router-dom'

const signedInLinks =() =>{
    return(
      <ul className="right">
          <li>
            <NavLink to ='/'>New Notification</NavLink>
          </li>
          <li>
            <NavLink to ='/'>Log Out</NavLink>
          </li>
          <li>
            <NavLink to ='/' className='btn btn-floating pink lighten-1'>NN</NavLink>
          </li>
      </ul>
    )
}
export default signedInLinks;