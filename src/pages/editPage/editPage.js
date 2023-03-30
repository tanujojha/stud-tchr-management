import React from 'react';
import { useLocation } from 'react-router-dom';
import EditStudForm from '../../components/editStudForm/editStudForm';
import EditTchrForm from '../../components/editTchrForm/editTchrForm';
import "./editPage.css"

function EditPage() {

  const location = useLocation()
  const path = location.pathname
  
  if(path.includes("/edit/stud")){
    return (
      <div className='editdiv'>
          <h2 className='edithead'>Edit Student</h2>
          <EditStudForm />
      </div>
    )

  }else if (path.includes("/edit/tchr")){
    return (
      <div className='editdiv'>
          <h2 className='edithead'>Edit Teacher</h2>
          <EditTchrForm/>
      </div>
    )
  }

}

export default EditPage