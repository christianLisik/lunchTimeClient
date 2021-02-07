import React from 'react';
import logo from '../../assets/logo_sa@2x.png'

const LoginHeader = () => {
    return (
        <div className="loginHeader">
           <div className="loginHeaderContainer">
               <img className="logo" alt="LUNCHTIME_Logo" src={logo} />
               <h1><b>LUNCH</b>TIME</h1>
           </div>
        </div>
    );
};

export default LoginHeader;