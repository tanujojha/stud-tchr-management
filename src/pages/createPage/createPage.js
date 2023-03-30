import React from 'react';
import "./createPage.css"
import CreateStudForm from '../../components/createStudForm/createStudForm';
import CreateTchrForm from '../../components/createTchrForm/createTchrForm';
import { useLocation } from 'react-router-dom';

function CreatePage() {

  const location = useLocation()
  const path = location.pathname;


  if(path.includes("/create/stud")){
    return (
      <div className='creatediv'>
          <h2 className='createhead'>Create Student</h2>
          <CreateStudForm/>
      </div>
    )
  }else if(path.includes("/create/tchr")){
    return (
      <div className='creatediv'>
          <h2 className='createhead'>Create Teacher</h2>
          <CreateTchrForm/>
      </div>
    )
  }
}

export default CreatePage