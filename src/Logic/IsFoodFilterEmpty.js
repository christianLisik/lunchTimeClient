export const isFoodFilterEmpty=(data)=>{

    
    return data.every(v => v.show === false);  //If true no food is in view. Show user message that are no products under is filter
}