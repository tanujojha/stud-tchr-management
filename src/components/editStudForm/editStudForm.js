import React, { useContext, useEffect } from 'react';
import "./editStudForm.css";
import Button from '@mui/material/Button';
import { StudContext } from '../../context/stud-tchrContext';
import { useFormik } from 'formik';
import { useLocation } from 'react-router-dom';

function EditStudForm() {


    // const location = useLocation()
    // const path = location.pathname
    // const locarr = path.split("/")
    // const id = locarr[locarr.length-1]

    const studContext = useContext(StudContext);
    const {getSingleStud, singleStud, editStudProfile} = studContext;
    // console.log(singleStud);
    
    // useEffect(()=>{
    //     getSingleStud(id)
    // }, [])


    const formik = useFormik({
        initialValues: {
            id: singleStud.id,
            name: singleStud.name,
            email: singleStud.email,
            age: singleStud.age,
            gender: singleStud.gender,
            class: singleStud.class,
            section: singleStud.section
        },
        onSubmit: (values)=>{
            editStudProfile(values)
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
                <label htmlFor="class" className="col-sm-2 col-form-label">Class</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.class} type="text" className="form-control" id="class"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="section" className="col-sm-2 col-form-label">Section</label>
                <div className="col-sm-10">
                    <input onChange={formik.handleChange} value={formik.values.section} type="text" className="form-control" id="section"/>
                </div>
            </div>

            <Button type='submit' className='submitbtn' variant="contained" color="primary" sx={{width: "40%"}}>submit</Button>

        </form>

    </div>
  )
}

export default EditStudForm