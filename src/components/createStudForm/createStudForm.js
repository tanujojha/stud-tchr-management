import React, { useContext } from 'react';
import "./createStudForm.css";
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { StudContext } from '../../context/stud-tchrContext';

function CreateForm() {

    const context = useContext(StudContext);
    const {createStud} = context;

    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            age: "",
            gender: "",
            class: "",
            section: ""
        },
        onSubmit: (values)=>{
            createStud(values)
            // console.log(values);
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

export default CreateForm