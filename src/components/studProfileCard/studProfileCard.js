import React, { useContext } from 'react';
import "./studProfileCard.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { StudContext } from '../../context/stud-tchrContext';
import { useNavigate } from 'react-router-dom';


function StudProfileCard({id}) {
  
  const navigate = useNavigate()
  const studcontext = useContext(StudContext);
  const {singleStud, deleteStud} = studcontext;


  const handleEdit = ()=>{
    navigate(`/edit/stud/${singleStud.id}`) 
  }

  const handleDelete = ()=>{
    deleteStud(singleStud.id);
  }

  return (
    <div className='profilecardmain'>
        <div className='topdiv'>
          <div className='profileimgdiv'>
            <img className='profilecardimg' src={singleStud.avatar} alt="..dummy image.."/>
          </div>
          <div className='nagdiv'>
            <h3 className='profileusername'>{singleStud.name}</h3>
            <div className='agdiv'>
              <h5 className='age'><span>Age:</span> {singleStud.age}</h5>
              <h5 className='gender'><span>Gender:</span> {singleStud.gender}</h5>
            </div>
          </div>
        </div>
        <div className='middiv'>
          <h5 className='email'><span>Email:</span> {singleStud.email}</h5>
          <h5 className='class'><span>Class:</span> {singleStud.class}</h5>
          <h5 className='section'><span>Section:</span> {singleStud.section}</h5>
          <h6 className='createdat'>{singleStud.createdAt}</h6>
        </div>
        <div className='botdiv'>
          <EditIcon onClick={handleEdit} id='editicon'/>  
          <DeleteForeverIcon onClick={handleDelete} id='deleteicon'/>            
        </div>
    </div>
  )
}

export default StudProfileCard