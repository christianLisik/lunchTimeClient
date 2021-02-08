export const checkDateTime = () => {

    const minTime = 700, maxTime = 1130; //minTime means clock time 7:00 and maxTime 11:30 

    let currentTime = Number(new Date().getHours() + "" + (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()); //Get current clock time in format of number


    //Check if current time is bettween 7.00 and 11:30 am
    if (minTime <= currentTime && maxTime >= currentTime) {
        return true;
    } else {

        return false;
    }
}





