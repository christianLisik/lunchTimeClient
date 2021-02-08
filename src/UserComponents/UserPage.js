import React from 'react';
import SideNavAndHeader from './Components/SideNavAndHeader.js';
import ShowUserPage from './Components/ShowUserPage.js';
import ShowUserCheckout from './Components/ShowUserCheckout.js';
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';

const UserPage = () => {

    return (
    <Router>
        <main className="userPage">
            
            <SideNavAndHeader/>
                <Switch>
                    <Route path="/" exact component={ShowUserPage}/>
                    <Route path="/showUserCheckout" component={ShowUserCheckout}/>
                </Switch>
        </main>
    </Router> 
    );
};



  export default UserPage;