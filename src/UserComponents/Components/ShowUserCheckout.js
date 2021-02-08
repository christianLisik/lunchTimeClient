import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {Link} from 'react-router-dom';
import {getPaymentSumCart} from '../../Logic/GetPaymentSumCart.js';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ShowUserCheckout = (props) => {

    const orderedFood=props.getFood;

    return (
    <div>
        <div>
            
            <Link className="link homePageText" to="/"><span>{'<< '}Startseite</span> </Link>
            <Link className="link showIconMobile" to="/"><KeyboardBackspaceIcon fontSize="large"/> </Link>
        </div>
         
            <div className="cartContainer">
                <h1>Warenkorb</h1>
            </div>
            <div className="cartShowPaymentContainer">
                <span>zu zahlen: </span>
                    <h2 className="h2CartPage">{getPaymentSumCart(props.getFood)}</h2>
            </div>

            <div className="showUserCheckoutContainer">
                <div>
                    {
                        orderedFood.map((values,index)=>(
                            values.amount>0?
                            <div className="paymentContainer">
                                <div className="orderedFoodPic"><img alt="linkText" src={values.pictureLink} /></div>
                                <div>
                                <ButtonGroup style={{ backgroundColor: '#fff' }} color="primary" aria-label="outlined primary button group">
                                            <Button style={{ color: '#fff', backgroundColor: '#d50057' }}>-</Button>
                                            <Button style={{ color: '#000' }}>
                                               {values.amount}
                                            </Button>
                                            <Button style={{ color: '#fff', backgroundColor: '#d50057' }}>+</Button>
                                </ButtonGroup>
                                </div>
                                <div>
                                <DeleteIcon style={{marginLeft:"50px"}} fontSize="large" />
                                </div>
                            </div>:
              null
                        ))
                    }
                  
                </div>
                <div className="paymentMethode">
                    <b>Tageslieferant</b>
                    <br /><br />
                    <FormControlLabel value="female" checked control={<Radio color="primary" />} label="username@paypal.me" />
                    <br /><br />
                    <Button variant="contained" color="primary">
                        BEZAHLEN
                    </Button>
                
                </div>
            </div>
        
    </div>
    );
};


const mapStateToProps = state =>{
    return {
        isUserLogged: state.isUserLogged,
        getFood: state.food
    }
  }
  
  
  export default connect(mapStateToProps,null)(ShowUserCheckout);