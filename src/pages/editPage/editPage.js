import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditStudForm from '../../components/editStudForm/editStudForm';
import EditTchrForm from '../../components/editTchrForm/editTchrForm';
import { StudContext, TchrContext } from '../../context/stud-tchrContext';
import "./editPage.css"

function EditPage() {

  // const studContext = useContext(StudContext)
  // const tchrContext = useContext(TchrContext);
  // const {getSingleStud, singleStud} = studContext;
  // const {getSingleTchr} = tchrContext;

  const location = useLocation()
  const path = location.pathname
  // const locarr = path.split("/")
  // const id = locarr[locarr.length-1]
  // // console.log(singleStud.length);

  // const navigate = useNavigate()
  
  // useEffect(()=>{
  //   if(path.includes("/edit/stud")){
      
  //       getSingleStud(id);

      
  //     // navigate(`/edit/stud/${id}`) 
 
  //   }else if(path.includes("/edit/tchr")){
  //     getSingleTchr(id);
 
  //   }
  // }, [])

  
  
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