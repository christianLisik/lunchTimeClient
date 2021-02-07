import { React, useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {getMinPrice,getHighPrice} from '../../Logic/GetPricesForFilter.js';
import {priceFilterFood,typFilterFood,ingridientsFilterFood} from '../../Redux/Index.js';
import {getTypesForFilterFood} from '../../Logic/GetTypesForFilter.js';
import {getIngridientsFood} from '../../Logic/GetIngridientsForFilter.js'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';


import {connect} from 'react-redux';

const FilterFood = (props) => {

    let ingridientsObj={};
    
    getIngridientsFood(props.getFood).forEach(element => {
        ingridientsObj[element]=false
    });


    let [value, setValue] = useState([getMinPrice(props.getFood), getHighPrice(props.getFood)]);
    let [valueTypFoodState, setValueTypFood] = useState('Alle');
    let [valueIngriedientsFoodSate, setSalueIngriedientsFoosSate] = useState(ingridientsObj)



    useEffect(() => {
        props.typFilterFood(valueTypFoodState);

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [valueTypFoodState]);

      useEffect(() => {
  
        props.ingridientsFilterFood(valueIngriedientsFoodSate);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [valueIngriedientsFoodSate]);


    const handleChange = (event, newValue) => {
        
      setValue(newValue);
      props.priceFilterFood(value);
    };

    const handleChangeTypFood = (event) => {
       
        setValueTypFood(event.target.value);
       
      
      };
    
      const handleChangeIngridients =(event)=>{
   
        setSalueIngriedientsFoosSate({ ...valueIngriedientsFoodSate, [event.target.name]: event.target.checked });

      }

    const marks = [
        {
          value: getMinPrice(props.getFood),
          label: getMinPrice(props.getFood)+"€"
        },
        {
          value: getHighPrice(props.getFood),
          label: getHighPrice(props.getFood)+"€"
        },
      ];
  
    return (
    <div>      
        <div className="filderFood">
        <Typography id="range-slider" gutterBottom>
         Preis
        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={0.1}
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          min={getMinPrice(props.getFood)}
          max={getHighPrice(props.getFood)}
          marks={marks}
        />
      </div>

        <div className="filderFood">
        <FormControl component="fieldset">
            <Typography>
             Typ
            </Typography>
            <RadioGroup aria-label="Typ Food" value={valueTypFoodState} onChange={handleChangeTypFood}>
            <FormControlLabel value="Alle" control={<Radio color="primary"/>} label="Alle" />

                {
                getTypesForFilterFood(props.getFood).map((values,index)=>(
                    values!==""?<FormControlLabel key={index} value={values} control={<Radio color="primary"/>} label={values} />:null  
                ))}

            </RadioGroup>
        </FormControl>
        </div>

        <div className="filderFood">
        <Typography>
         Zutaten
        </Typography>
        {
             getIngridientsFood(props.getFood).map((values,index)=>(
                <FormControlLabel key={index}
                control={
                  <Checkbox
                  checked={valueIngriedientsFoodSate[values]}
                    onChange={handleChangeIngridients}
                    name={values}
                    color="primary"
                  />
                }
                label={values}
              />
             ))
        }

        </div>
    
    </div>
    );
};


function valuetext(value) {
    return value;
  }


const mapStateToProps = state =>{
    return {
        getFood: state.food
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        priceFilterFood: value => dispatch(priceFilterFood(value)),
        typFilterFood: valueTypFoodState => dispatch(typFilterFood(valueTypFoodState)),
        ingridientsFilterFood: valueIngriedientsFoodSate => dispatch(ingridientsFilterFood(valueIngriedientsFoodSate)),
        
        
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(FilterFood);

