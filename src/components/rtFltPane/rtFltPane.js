import React from 'react';
import { Link } from 'react-router-dom'; 
import "./rtFltPane.css"

function RtFltPane() {
  return (
    <div className='rftfltdiv'>
        <div className='hrrttop'></div>
        <ul className='rftul'>
           <li><Link to="/tchrs">Teachers</Link></li>
           <li><Link to="/create/tchr">Create</Link></li>
        </ul>
        <div className='hrrtbot'></div>
    </div>
  )
}

export default RtFltPane

