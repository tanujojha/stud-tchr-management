import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StudProfileCard from '../../components/studProfileCard/studProfileCard';
import TchrProfileCard from '../../components/tchrProfileCard/tchrProfileCard';
import { StudContext, TchrContext } from '../../context/stud-tchrContext';
import "./profilePage.css";

function ProfilePage() {
  
  const studContext = useContext(StudContext)
  const {getSingleStud} = studContext;
  const tchrContext = useContext(TchrContext)
  const {getSingleTchr} = tchrContext;
  
  const location = useLocation()
  const path = location.pathname
  let locarr = location.pathname.split("/");
  let id = locarr[locarr.length-1]
  
  useEffect(()=>{
 
    if(path.includes("/profile/stud")){
      getSingleStud(id);
 
    }else if(path.includes("/profile/tchr")){
      getSingleTchr(id);
 
    }
 
 
  },[])
 
 if(path.includes("/profile/stud")){
  return (
    <div className='profilepagediv'>
        <div className='innerlistpage'>
         
          <StudProfileCard id = {id}/>
        </div>
    </div>
  )
 } else if(path.includes("/profile/tchr")){
  return (
    <div className='profilepagediv'>
        <div className='innerlistpage'>
         
          <TchrProfileCard id = {id}/>
        </div>
    </div>
  )
 }


}

export default ProfilePage