import { React, useState, useEffect } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import SearchIcon from '@material-ui/icons/Search';

import {searchFood} from '../../Redux/Index.js';
import {connect} from 'react-redux';


const SearchBarFood = (props) => {

    let [searchFoodState, setSearchFoodState] = useState("");

    useEffect(() => {
        props.searchFood(searchFoodState);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [searchFoodState]);




    const searchFood = (e)=>{
        
        setSearchFoodState(e.target.value);
    }

    return (
     
        <div className="searchBarFood">
        <TextField 
        variant="outlined" 
        fullWidth 
        label="Lunches suchen"
        value={searchFoodState}
        onChange={searchFood}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}

      />
   
        </div>
    );
};


const mapStateToProps = state =>{
    return {
        getFood: state.food
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        searchFood: searchFoodState => dispatch(searchFood(searchFoodState))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBarFood);