export const countFood = (data) => { //It counts the food on the view and results it for the user after he used the filters. 

    let countFood = 0;

    data.forEach(v => v.show ? countFood++ : v);

    return countFood;
}

