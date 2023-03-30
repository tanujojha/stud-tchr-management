import React, { useContext } from 'react';
import "./editTchrForm.css";
import Button from '@mui/material/Button';
import { TchrContext } from '../../context/stud-tchrContext';
import { useFormik } from 'formik';

function EditTchrForm() {

    const tchrContext = useContext(TchrContext);
    const {singleTchr, editTchrProfile} = tchrContext;

    const formik = useFormik({
        initialValues: {
            id: singleTchr.id,
            name: singleTchr.name,
            email: singleTchr.email,
            age: singleTchr.age,
            gender: singleTchr.gender,
            phoneNum: singleTchr.phoneNum,
        },
        onSubmit: (values)=>{
            editTchrProfile(values)
        }
    })


  return (
    <div className='formdiv'>
        <form onSubmit={formik.handleSubmit}>
            
            <div className="row mb-3">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.name} type="text" className="form-control" id="name"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control" id="email"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.age} type="text" className="form-control" id="age"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.gender} type="text" className="form-control" id="gender"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="phoneNum" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.phoneNum} type="text" className="form-control" id="phoneNum"/>
                </div>
            </div>
            

            <Button type='submit' className='submitbtn' variant="contained" color="primary" sx={{width: "40%"}}>submit</Button>

        </form>

    </div>
  )
}

export default EditTchrForm