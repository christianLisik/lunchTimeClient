import React from 'react';
import SideNav from './Components/SideNav.js';
import DailyOffer from './Components/DailyOffer.js';


const UserPage = () => {
    return (
        <main className="userPage">
            <SideNav/>
            <DailyOffer />
        </main>
    );
};

export default UserPage;