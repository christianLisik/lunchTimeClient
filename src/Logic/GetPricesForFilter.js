export const getMinPrice = foodData=>{

    let minValue=Math.min.apply(Math, foodData.map(function(o) { return o.price; }))
    return minValue;
}

export const getHighPrice = foodData=>{

    let maxValue=Math.max.apply(Math, foodData.map(function(o) { return o.price; }))
    return maxValue;
}