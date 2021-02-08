export const isFoodFilterEmpty = (data) => { //If results of food filter is empty, display user there is nothing found under his set filter

    return data.every(v => v.show === false);  //If true no food is in view. Show user message that are no products under is filter
}