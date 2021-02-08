import { SEARCH_FOOD, PRICE_FILTER_FOOD, TYP_FILTER_FOOD, INGRIDIENTS_FILTER_FOOD, AMOUNT_FOOD_INCREMENT } from './Types.js';
import { menuData } from '../../Logic/MenuDataDummy.js';
import { getCurrentDate } from '../../Logic/GetDateTime.js';

const initalState = menuData()[getCurrentDate()].menu;

const foodReducer = (state = initalState, action) => {
    switch (action.type) {

        case AMOUNT_FOOD_INCREMENT:

            return state.map((value, i) => {

                if (i === action.payload.indexMenu) {

                    value.amount = value.amount + action.payload.amount;
                    console.log(state)
                }


                return value;
            });

        case SEARCH_FOOD:

            return state.map((value, i) => {

                if (value.menuName.toLowerCase().includes(action.payload.toLowerCase()) || action.payload === "") {
                    value.show = true;
                } else {
                    value.show = false;
                }
                return value;
            });

        case PRICE_FILTER_FOOD:

            return state.map((value, i) => {
                if (action.payload[0] <= value.price && action.payload[1] >= value.price) {
                    value.show = true;
                } else {
                    value.show = false;
                }

                return value;
            });

        case TYP_FILTER_FOOD:

            return state.map((value, i) => {
                console.log(action.payload);
                if (value.typ === action.payload || action.payload === "Alle") {
                    value.show = true;
                } else {
                    value.show = false;
                }

                return value;
            });

        case INGRIDIENTS_FILTER_FOOD:

            let checkInit = Object.keys(action.payload).every(function (key) {
                return !action.payload[key];
            });

            if (checkInit) {

                return state.map((value, i) => {

                    value.show = true;

                    return value;
                });


            }

            return state.map((value, i) => {

                console.log(action.payload[value.ingredients])

                if (action.payload[value.ingredients] === true) {
                    value.show = true;
                } else {
                    value.show = false;
                }
                return value;
            });





        default: return state;
    }
}

export default foodReducer;