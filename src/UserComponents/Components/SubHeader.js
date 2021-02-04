import React from 'react';
import {showCurrentDay} from '../../Logic/GetDateTime.js'

const SubHeader = () => {

 
    return (
        <div className="dailyOffer">
            <div className="dailyOfferContainer">
                <span>Heute ist: </span>
                <h2>{showCurrentDay()}</h2> 
                <span className="businessHourText"><b>Öffnungszeiten: </b>Mo-Fr 07:00 – 11:30 Uhr</span> 
            </div>
        </div>
    );
};

export default SubHeader;


