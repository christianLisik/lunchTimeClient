import React from 'react';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import LoginForm from '../Components/LoginForm.js';
import ForgotPasswordForm from '../Components/ForgotPasswordForm.js';
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';


const LoginPage = () => {
    return (
    <Router>
        <main className="loginPage">
            <Header />
                <Switch>
                    <Route path="/" exact component={LoginForm}/>
                    <Route path="/forgotPassword" component={ForgotPasswordForm}/>
                </Switch>
            <Footer />
        </main>
    </Router>
    );
};

export default LoginPage;