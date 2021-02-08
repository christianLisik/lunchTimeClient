export const getOrderdFoodCount = foodData => {//Counts the ordered food of user and displays it as Symbol next to the shoping cart icon

    let countOrderedFood = 0;

    foodData.map((values) => {
        if (values.amount > 0) {
            countOrderedFood = countOrderedFood + values.amount;
        }
        return null;
    })
    return countOrderedFood;
}