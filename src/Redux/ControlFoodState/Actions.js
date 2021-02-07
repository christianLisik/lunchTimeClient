import {SEARCH_FOOD,PRICE_FILTER_FOOD,TYP_FILTER_FOOD,INGRIDIENTS_FILTER_FOOD} from './Types.js';

export const searchFood = (searchFood = "")=>{
    return {
        type: SEARCH_FOOD,
        payload:searchFood
    }
}

export const priceFilterFood = (priceFilter = 20)=>{
    return {
        type: PRICE_FILTER_FOOD,
        payload:priceFilter
    }
}

export const typFilterFood = (typFilter = 'Alle')=>{
        return {
            type: TYP_FILTER_FOOD,
            payload:typFilter
        }
}

export const ingridientsFilterFood = (ingridientsFilter = '')=>{
    return {
        type: INGRIDIENTS_FILTER_FOOD,
        payload:ingridientsFilter
    }
}