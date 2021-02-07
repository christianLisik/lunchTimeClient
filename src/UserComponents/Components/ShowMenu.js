import React from 'react';
import { useState } from 'react';

import { isFoodFilterEmpty } from '../../Logic/IsFoodFilterEmpty.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { countFood } from '../../Logic/CountFood.js'
import StarIcon from '@material-ui/icons/Star';
import { SUCESS_ADDED_PRODUCT, SUCESS_ADDED_FAVOURITE } from '../../Toasts/ToastsMessages.js';
import { connect } from 'react-redux';



const ShowMenu = (props) => {

    const dataMenu = props.getFood, //Save all the menu food data for today into an json object
        buttonsDisabled = new Array(dataMenu.length).fill(true); //Initalization for buttons 'add to cart'. Set them all into disable (true). Only if user increment his order the status of array change.

    let [dataMenuState, setDataMenuState] = useState(dataMenu),
        [disableButtonAddCartState, setDisableButtonAddCartState] = useState(buttonsDisabled);

    return (
        <div>
            <span>{countFood(props.getFood) > 1 || countFood(props.getFood) === 0 ? <div className="countFoodText"><b>{countFood(props.getFood)}</b> Ergebnisse gefunden</div> : <div className="countFoodText"><b>{countFood(props.getFood)}</b> Ergebnis gefunden</div>} </span>
            <div className="showMenu"> {/* Grid Container shows the food menu into boxes*/}
                {
                    dataMenuState.map((values, index) =>
                        values.show ?
                            <div className="showMenuContainer" key={index}>
                                <div className="showMenuContainerPicture"><img alt={values.menuName} src={values.pictureLink} />
                                    <span className="showPriceText">{values.price.toLocaleString('de-DE', {
                                        style: 'currency', currency: 'EUR', minimumFractionDigits: 2
                                    })}</span>
                                    <span className="showIsHotText">{values.hot ? "BELIEBT!" : ""}</span>
                                    <div className="showIncDecButton">
                                        <ButtonGroup style={{ backgroundColor: '#fff' }} color="primary" aria-label="outlined primary button group">
                                            <Button style={{ color: '#fff', backgroundColor: '#d50057' }} onClick={decrement.bind(index)}>-</Button>
                                            <Button style={{ color: '#000' }}>
                                                {values.amount}
                                            </Button>
                                            <Button style={{ color: '#fff', backgroundColor: '#d50057' }} onClick={increment.bind(index)}>+</Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                                <div className="showMenuContainerMenuDescribing">{values.menuName}</div>
                                <div className="showMenuContainerCartFavourit">
                                    <ButtonGroup style={{ width: '100%' }} disableElevation variant="contained" >
                                        <Button onClick={addToFavourits.bind(index)} style={{ borderRadius: '0px', backgroundColor: 'aliceblue' }} >{values.favourite ? <StarIcon style={{ fill: "gold" }} /> : <StarOutlineIcon />}</Button>
                                        <Button onClick={addToCart.bind({ values: values, index: index })} disabled={disableButtonAddCartState[index]} style={{ width: '100%', borderRadius: '0px' }} fullWidth color="primary" endIcon={<ShoppingCartOutlinedIcon />}>hinzufügen</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                            : null
                    )
                }
            </div>
            <div>{isFoodFilterEmpty(dataMenuState) ? <div className="showNoMenu"><b>Leider keine Lunches gefunden</b></div> : null}</div>
        </div>
    );

    function addToFavourits(e) {
        const newDataMenuStateFav = [...dataMenuState];

        newDataMenuStateFav[this].favourite = !newDataMenuStateFav[this].favourite;
        setDataMenuState(newDataMenuStateFav);

        if (newDataMenuStateFav[this].favourite) {
            SUCESS_ADDED_FAVOURITE('Favourit hinzugefügt');
        }

    }

    function addToCart(e) {
        const newDataMenuStateInc = [...dataMenuState],
            enableButtonAddCartState = [...disableButtonAddCartState];

        newDataMenuStateInc[this.index].amount = 0;
        enableButtonAddCartState[this.index] = true;

        setDataMenuState(newDataMenuStateInc);
        setDisableButtonAddCartState(enableButtonAddCartState);

        SUCESS_ADDED_PRODUCT('In Warenkorb hinzugefügt');
    }

    function increment(e) {

        const newDataMenuStateInc = [...dataMenuState],
            enableButtonAddCartState = [...disableButtonAddCartState];

        newDataMenuStateInc[this].amount = newDataMenuStateInc[this].amount + 1;
        enableButtonAddCartState[this] = false;

        setDataMenuState(newDataMenuStateInc);
        setDisableButtonAddCartState(enableButtonAddCartState);

    }

    function decrement(e) {
        const newDataMenuStateDec = [...dataMenuState];
        disableButtonAddCartState = [...disableButtonAddCartState];

        if (newDataMenuStateDec[this].amount > 0) {
            newDataMenuStateDec[this].amount = newDataMenuStateDec[this].amount - 1;
            setDataMenuState(newDataMenuStateDec);

        }
        if (newDataMenuStateDec[this].amount === 0) {
            disableButtonAddCartState[this] = true;
            setDisableButtonAddCartState(disableButtonAddCartState);
        }


    }
}


const mapStateToProps = state => {
    return {
        getFood: state.food
    }
}



export default connect(mapStateToProps, null)(ShowMenu);


