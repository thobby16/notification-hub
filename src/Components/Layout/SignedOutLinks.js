import React from 'react';
import { NavLink} from 'react-router-dom'

const signedOutLinks =() =>{
    return(
      <ul className="right">
          <li>
            <NavLink to ='/SignUp'>SgnUp</NavLink>
          </li>
          <li>
            <NavLink to ='/SignIn'>Login</NavLink>
          </li>
         
      </ul>
    )
}
export default signedOutLinks;