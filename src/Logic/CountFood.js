export const countFood=(data)=>{

    let countFood = 0;

    data.forEach(v => v.show ? countFood++ : v);

    return countFood;
}

