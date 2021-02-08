export const getMinPrice = foodData => { //Gets the min and max price of the food data. Its needed for the filter to the the min and max value of food data

    let minValue = Math.min.apply(Math, foodData.map(function (o) { return o.price; }))
    return minValue;
}

export const getHighPrice = foodData => {

    let maxValue = Math.max.apply(Math, foodData.map(function (o) { return o.price; }))
    return maxValue;
}