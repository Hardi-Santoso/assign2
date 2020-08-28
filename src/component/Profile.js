import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink} from "react-router-dom";
import '../index.css';
import '../flexboxgrid.css';

import { useSelector , useDispatch} from 'react-redux';

export const Theme = React.createContext({})
export const Provider = Theme.Provider;


function Profile(){
    //state.register dari store.js
    const data = useSelector((state) => state.register);

    return(
        <>
            {
                data.register.map((val,key)=>(
                    <>
                        <div key={key}>
                            <p>Id: {val.id}</p>
                            <p>Name: {val.fullname}</p>
                            <p>Email: {val.email}</p>
                            <p>Password: {val.password}</p>
                            <p>Telepon: {val.telepon}</p>
                            
                        </div>
                        <hr/>
                    </>
                ))
            }

        </>
    )
}

export default Profile;