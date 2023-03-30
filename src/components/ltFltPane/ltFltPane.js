import React from 'react';
import { Link } from 'react-router-dom';
import "./ltFltPane.css"

function LtFltPane() {


  return (
    <div className='lftfltdiv'>
        <div className='hrtop'></div>
        <ul className='lftul'>
        <li><Link to="/studs">Students</Link></li>
        <li><Link to="/create/stud">create</Link></li>
        </ul>
        <div className='hrbot'></div>
    </div>
  )
}

export default LtFltPane

