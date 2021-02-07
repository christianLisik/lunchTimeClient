export const getTypesForFilterFood=foodData=>{
    let lookup = {},
        items = foodData,
        result = [];
    
    // eslint-disable-next-line no-cond-assign
    for (let item, i = 0; item = items[i++];) {
      let name = item.typ;
    
      if (!(name in lookup)) {
        lookup[name] = 1;
        result.push(name);
      }
    }
    return result;
}