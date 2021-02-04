import React from 'react';
import {useState} from 'react';
import {menuData} from '../../Logic/MenuDataDummy.js';
import {getCurrentDate} from '../../Logic/GetDateTime.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import {toast } from 'react-toastify';



const ShowMenu = () => {

    const dataMenu=menuData()[getCurrentDate()].menu, //Save all the menu food data for today into an json object
          buttonsDisabled = new Array(dataMenu.length).fill(true); //Initalization for buttons 'add to cart'. Set them all into disable (true). Only if user increment his order the status of array change.

    let [dataMenuState, setDataMenuState] = useState(dataMenu),
        [disableButtonAddCartState, setDisableButtonAddCartState] = useState(buttonsDisabled);

    return (

        <div className="showMenu">
            {
            dataMenuState.map((values,index)=>
            <div className="showMenuContainer" key={index}>
                <div className="showMenuContainerPicture"><img alt={values.menuName} src={values.pictureLink} />
                    <span className="showPriceText">{values.price}</span>
                    <span className="showIsHotText">{values.hot?"BELIEBT!":""}</span>
                    <div className="showIncDecButton">
                        <ButtonGroup style={{backgroundColor:'#fff'}} color="primary" aria-label="outlined primary button group">
                            <Button onClick={decrement.bind(index)}>-</Button>
                                <Button style={{color:'#000'}}>
                                  {values.amount}
                                </Button>
                            <Button onClick={increment.bind(index)}>+</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="showMenuContainerMenuDescribing">{values.menuName}</div>
                <div className="showMenuContainerCartFavourit">
                    <ButtonGroup style={{width:'100%'}} disableElevation variant="contained" >
                        <Button style={{borderRadius:'0px',backgroundColor:'aliceblue'}} ><StarOutlineIcon /></Button>
                        <Button onClick={addToCart.bind({values:values,index:index})} disabled={disableButtonAddCartState[index]} style={{width:'100%',borderRadius:'0px'}} fullWidth color="primary" endIcon={<ShoppingCartOutlinedIcon />}>hinzufügen</Button>
                    </ButtonGroup>
                </div>
            </div>
            )
            }
        </div>
    );

    function addToCart(e){
        const newDataMenuStateInc = [...dataMenuState],
              enableButtonAddCartState = [...disableButtonAddCartState];

              newDataMenuStateInc[this.index].amount = 0;
              enableButtonAddCartState[this.index] = true;

              setDataMenuState(newDataMenuStateInc);
              setDisableButtonAddCartState(enableButtonAddCartState);

              toast("Wurde erfolgreich hinzugefügt");
    }

    function increment(e){
  
        const newDataMenuStateInc = [...dataMenuState],
              enableButtonAddCartState = [...disableButtonAddCartState];

        newDataMenuStateInc[this].amount = newDataMenuStateInc[this].amount+1;
        enableButtonAddCartState[this] = false;

        setDataMenuState(newDataMenuStateInc);
        setDisableButtonAddCartState(enableButtonAddCartState);
     
    }
    
    function decrement(e){
        const newDataMenuStateDec = [...dataMenuState];
              disableButtonAddCartState = [...disableButtonAddCartState];

        if(newDataMenuStateDec[this].amount>0){
            newDataMenuStateDec[this].amount = newDataMenuStateDec[this].amount-1;
            setDataMenuState(newDataMenuStateDec);
      
        }
        if(newDataMenuStateDec[this].amount===0){
            disableButtonAddCartState[this] = true;
            setDisableButtonAddCartState(disableButtonAddCartState);
        }

        
    }
}



export default ShowMenu; 

