import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink} from "react-router-dom";
import '../index.css';
import '../flexboxgrid.css';


import { Formik, useFormik } from 'formik';
import { useDispatch , connect} from 'react-redux';
import { register } from '../redux/actions/register';
import * as Yup from 'yup';



function Register({setOpen}){

    const [generateId, setId] = React.useState(1);

    const dispatch = useDispatch();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const RegisterSchemaValidation = Yup.object().shape({
        fullname: Yup.string()
        .min(5,'Name to short')
        .max(50,'Name to long')
        .required("Name is required"),

        email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),

        password: Yup.string()
        .min(5,'Password to short')
        .required("Password is required"),

        telepon: Yup.string()
        .min(12,'Phone Number to short')
        .matches(phoneRegExp, 'Phone number is not valid')
        .required("Phone Number is required"),
    })

    const formRegister = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            telepon: ''
        },
        validationSchema: RegisterSchemaValidation,
        onSubmit: (values ,{resetForm}) => {
            setId(generateId + 1);
            const value = {
                id:generateId,
                fullname:values.fullname, 
                email:values.email, 
                password:values.password, 
                telepon:values.telepon
            }
            dispatch(register(value))
            resetForm({values:''});
        },
    })

    return(
        <>
            <form onSubmit={formRegister.handleSubmit} className="">

                {/* <input  
                    name="id" 
                    value={{generateId}}
                    
                /> */}

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-top-10" style={{paddingLeft:"0px"}}>
                    <label htmlFor="fullname">Name</label>
                    <input
                        type="fullname"
                        name="fullname"
                        placeholder="Name"
                        className="input-special"
                        onChange={formRegister.handleChange}
                        value={formRegister.values.fullname}
                        style={{ marginBottom: 5 }}
                    />
                    {
                        (formRegister.touched.fullname && formRegister.errors.fullname) && (<p style={{color:"red", marginTop:"0px", marginBottom:"5px"}}>{formRegister.errors.fullname}</p>)
                    }
                    
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input-special"
                        onChange={formRegister.handleChange}
                        value={formRegister.values.email}
                        style={{ marginBottom: 5 }}
                    />
                    {
                        (formRegister.touched.email && formRegister.errors.email) && (<p style={{color:"red", marginTop:"0px", marginBottom:"5px"}}>{formRegister.errors.email}</p>)
                    }

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input-special"
                        onChange={formRegister.handleChange}
                        value={formRegister.values.password}
                        style={{ marginBottom: 5 }}
                    />
                    {
                        (formRegister.touched.password && formRegister.errors.password) && (<p style={{color:"red", marginTop:"0px", marginBottom:"5px"}}>{formRegister.errors.password}</p>)
                    } 
                    
                    <label htmlFor="telepon">Telephone</label>
                    <input
                        type="tel"
                        name="telepon"
                        placeholder="Telephone"
                        className="input-special"
                        onChange={formRegister.handleChange}
                        value={formRegister.values.telepon}
                        style={{ marginBottom: 5 }}
                    />
                    {
                        (formRegister.touched.telepon && formRegister.errors.telepon) && (<p style={{color:"red", marginTop:"0px", marginBottom:"5px"}}>{formRegister.errors.telepon}</p>)
                    } 
                </div>

                <div className="text-center">
                    <button type="submit" className="btn-special" style={{cursor:"pointer"}}>
                        Register
                    </button>
                </div>
                
            </form>
        </>
    )
}

export default connect() (Register);