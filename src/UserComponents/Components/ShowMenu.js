import React from 'react';
import { useState, useEffect } from 'react';

import { isFoodFilterEmpty } from '../../Logic/IsFoodFilterEmpty.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { countFood } from '../../Logic/CountFood.js'
import StarIcon from '@material-ui/icons/Star';
import { SUCESS_ADDED_PRODUCT, SUCESS_ADDED_FAVOURITE } from '../../Toasts/ToastsMessages.js';
import { connect } from 'react-redux';
import {incrementFood,decrementFood} from '../../Redux/Index.js';



const ShowMenu = (props) => {


    const dataMenu = props.getFood  , //Save all the menu food data for today into an json object
        buttonsDisabled = new Array(dataMenu.length).fill(true), //Initalization for buttons 'add to cart'. Set them all into disable (true). Only if user increment his order the status of array change.
        buttonCounter=new Array(dataMenu.length).fill(0);

    let [dataMenuState, setDataMenuState] = useState(dataMenu),
        [disableButtonAddCartState, setDisableButtonAddCartState] = useState(buttonsDisabled),
        [buttonCounterState,setButtonCounterState]=useState(buttonCounter);

        useEffect(() => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [dataMenuState]);

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
                                                {buttonCounterState[index]}
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
            SUCESS_ADDED_FAVOURITE(dataMenuState[this].menuName);
        }

    }

    function addToCart(e) {
     
        props.incrementFood({indexMenu:this.index,amount:buttonCounterState[this.index]});


        const newDataMenuStateInc = [...buttonCounterState],
              enableButtonAddCartState = [...disableButtonAddCartState];

        SUCESS_ADDED_PRODUCT(dataMenuState[this.index].menuName,newDataMenuStateInc[this.index]);  
          
                newDataMenuStateInc[this.index] = 0;
                enableButtonAddCartState[this.index] = true;
    
                setButtonCounterState(newDataMenuStateInc);
                setDisableButtonAddCartState(enableButtonAddCartState);
      
            
  


                


    }

    function increment(e) {

        const newDataMenuStateInc = [...buttonCounterState],
            enableButtonAddCartState = [...disableButtonAddCartState];

        newDataMenuStateInc[this] = newDataMenuStateInc[this] + 1;
        enableButtonAddCartState[this] = false;

        setButtonCounterState(newDataMenuStateInc);
        setDisableButtonAddCartState(enableButtonAddCartState);
       

    }

    function decrement(e) {
        const newDataMenuStateDec = [...buttonCounterState];
        disableButtonAddCartState = [...disableButtonAddCartState];

        if (newDataMenuStateDec[this] > 0) {
            newDataMenuStateDec[this] = newDataMenuStateDec[this] - 1;
            setButtonCounterState(newDataMenuStateDec);

        }
        if (newDataMenuStateDec[this] === 0) {
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

const mapDispatchToProps = dispatch =>{
    return {
        incrementFood: value => dispatch(incrementFood(value)),
        decrementFood: dataMenuState => dispatch(decrementFood(dataMenuState))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ShowMenu);


