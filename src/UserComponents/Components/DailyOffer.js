import React from 'react';

const DailyOffer = () => {

    let currentDate=new Date().getDate()-1; //Get current day as index. That means Monday = 0; Tuesday = 1, Wednesday = 2...

    return (
        <div className="dailyOffer">
            <div className="dailyOfferContainer">
                <span>Heute ist: </span>
                <h2>{showCurrentDay(currentDate)}</h2> 
                <span className="businessHourText"><b>Öffnungszeiten: </b>Mo-Fr 07:00 – 11:30 Uhr</span> 
            </div>
        </div>
    );
};

export default DailyOffer;

const showCurrentDay=currentDayAsIndex=>{
    if (typeof(dailyOfferMenue[currentDayAsIndex]) !== 'undefined' && dailyOfferMenue[currentDayAsIndex] != null){
        return dailyOfferMenue[currentDayAsIndex].showDay;
    }else{
        return "not defined"
    }
}

const dailyOfferMenue=[
    {
        day:"Montag",
        showDay:"Montag",
    },
    {
        day:"Dienstag",
        showDay:"Thai-Tuesday",
    },
    {
        day:"Mittwoch",
        showDay:"Mittwoch"
    },
    {
        day:"Donnerstag",
        showDay:"Dönerstag"
    },
    {
        day:"Freitag",
        showDay:"Freddy-Friday"
    },
    {
        day:"Samstag",
        showDay:"geschlossen"
    },
    {
        day:"Sonntag",
        showDay:"geschlossen"
    },

]


