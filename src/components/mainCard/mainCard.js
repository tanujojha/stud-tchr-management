import React, { useContext } from 'react';
import "./mainCard.css";
import Button from '@mui/material/Button';
import { StudContext, TchrContext } from '../../context/stud-tchrContext';
import { useLocation, useNavigate } from 'react-router-dom';

function MainCard({user}) {
 
  const context = useContext(StudContext);
  const {getSingleStud} = context;
  const tchrContext = useContext(TchrContext)
  const {getSingleTchr} = tchrContext;

  const location = useLocation()
  const path = location.pathname;

  const navigate = useNavigate()


  const handelClick = ()=>{
    if(path === "/studs"){
      getSingleStud(user.id);
      navigate(`/profile/stud/${user.id}`)
    }else if(path === "/tchrs"){
      getSingleTchr(user.id);
      navigate(`/profile/tchr/${user.id}`)
    }
  }

  return (
    <div className='cardmain'>
        <div className='cardimgdiv'>
            <img className='cardimg' src={user.avatar} alt="..dummy image.."/>
        </div>
        <div className='cardbody'>
            <h5 className='username'>{user.name}</h5>
            <Button onClick={handelClick} className='viewprofilebtn' variant="outlined" color="primary" sx={{width: "100%"}}>View Profile</Button>

        </div>
    </div>
  )
}

export default MainCard