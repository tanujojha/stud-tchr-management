import React, { useContext } from 'react';
import "./tchrProfileCard.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TchrContext } from '../../context/stud-tchrContext';
import { useNavigate } from 'react-router-dom';


function TchrProfileCard() {
  
  const navigate = useNavigate()
  const tchrcontext = useContext(TchrContext);
  const {singleTchr, deleteTchr} = tchrcontext;


  const handleEdit = ()=>{
    navigate(`/edit/tchr/${singleTchr.id}`)
  }

  const handleDelete = ()=>{
    deleteTchr(singleTchr.id);
  }

  return (
    <div className='profilecardmain'>
        <div className='topdiv'>
          <div className='profileimgdiv'>
            <img className='profilecardimg' src={singleTchr.avatar} alt="..dummy image.."/>
          </div>
          <div className='nagdiv'>
            <h3 className='profileusername'>{singleTchr.name}</h3>
            <div className='agdiv'>
              <h5 className='age'><span>Age:</span> {singleTchr.age}</h5>
              <h5 className='gender'><span>Gender:</span> {singleTchr.gender}</h5>
            </div>
          </div>
        </div>
        <div className='middiv'>
          <h5 className='email'><span>Email:</span> {singleTchr.email}</h5>
          <h5 className='phone'><span>Phone:</span> {singleTchr.phoneNum}</h5>
          <h6 className='createdat'>{singleTchr.createdAt}</h6>
        </div>
        <div className='botdiv'>
          <EditIcon onClick={handleEdit} id='editicon'/>  
          <DeleteForeverIcon onClick={handleDelete} id='deleteicon'/>            
        </div>
    </div>
  )
}

export default TchrProfileCard