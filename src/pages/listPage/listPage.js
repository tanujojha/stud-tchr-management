import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainCard from '../../components/mainCard/mainCard';
import { StudContext, TchrContext } from '../../context/stud-tchrContext';
import "./listPage.css";

function ListPage({type}) {

  const studContext = useContext(StudContext)
  const {studs, getAllStuds} = studContext;
  const tchrContext = useContext(TchrContext)
  const {tchrs, getAllTchrs} = tchrContext;

 const location = useLocation()

  useEffect(()=>{
 
    if(location.pathname === "/studs"){
      getAllStuds();

    }else if(location.pathname === "/tchrs"){
      getAllTchrs();

    }
  },[location.pathname])

  

  return (
    <div className='profilepagediv'>
          <h4 className='listtitle'>{location.pathname === "/studs" ? "Students" : "Teachers"}</h4>
        <div className='innerlistpage'>
          {
            (()=>{
              if(location.pathname === "/studs"){
                return studs.map((user)=> <MainCard key={user.id} user={user} type={type}/>)
              }else if(location.pathname === "/tchrs"){
                return tchrs.map((user)=> <MainCard key={user.id} user={user} type={type}/>)
              }
            })()
          }
        </div>
    </div>
  )
}

export default ListPage