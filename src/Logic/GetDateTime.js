export const showCurrentDay=()=>{
    //let currentDateTimeAsIndex=new Date().getDate()-1; //Get current day as index. That means Monday = 0; Tuesday = 1, Wednesday = 2...
    let currentDateTimeAsIndex=1;//Thai Tuesday REMOVE LATER!!!

    if (typeof(dailyOfferMenue[currentDateTimeAsIndex]) !== 'undefined' && dailyOfferMenue[currentDateTimeAsIndex] != null){
        return dailyOfferMenue[currentDateTimeAsIndex].showDay;
    }else{
        return "geschlossen"
    }
}

export const getCurrentDate=()=>{
    return 1; //REMOVE LATER one STANDS FOR TUESDAY
}


export const dailyOfferMenue=[
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
