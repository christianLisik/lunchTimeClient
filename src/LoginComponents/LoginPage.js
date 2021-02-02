import React from 'react';
import LoginHeader from './Components/LoginHeader.js';
import LoginForm from './Components/LoginForm.js';
import LoginFooter from './Components/LoginFooter.js';

const LoginPage = () => {
    return (
        <main className="loginPage">
            <LoginHeader />
            <LoginForm />
            <LoginFooter />
        </main>
    );
};

export default LoginPage;