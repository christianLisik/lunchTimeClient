export const getIngridientsFood = foodData => {

 
    return foodData.map((values,index)=>{
        return values.ingredients;
    });

}