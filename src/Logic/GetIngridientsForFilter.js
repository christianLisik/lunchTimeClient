export const getIngridientsFood = foodData => { //Get all the ingridients of the food. Its needed for the filter to show them the user


    return foodData.map((values, index) => {
        return values.ingredients;
    });

}