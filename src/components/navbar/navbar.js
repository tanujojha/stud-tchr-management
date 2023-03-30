import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';



function Navbar() {


  return (
      <div className='navbardiv'>
          <div className='headdiv'>
            <Link to="/">
              <h1 className='head'>Student-Teacher Management</h1>
            </Link>
          </div>
      </div>
  )
}
  
  export default Navbar


  