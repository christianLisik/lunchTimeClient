import React from 'react';
import './App.css';
import LoginPage from './LoginComponents/LoginPage.js';
import UserPage from './UserComponents/UserPage.js'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 
import {connect} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component{


  render(){

    return(
      
      <MuiThemeProvider theme={theme}> {/* Set custom theme. Theme is changed unter const 'theme' */}
        <ToastContainer />{/* Toast-Container. Show all notifications to the user in this container */}
          {
            !this.props.isUserLogged?
            <LoginPage />:<UserPage /> // Check if user is signed or not. If user is signed show the user-page otherwise show the user to sign in
          } 
      </MuiThemeProvider>
    )
  }
}

const theme = createMuiTheme({ //Change main theme colors here
  palette: {
    primary: {
      main: '#d50057',
    },
    secondary:{
      main:'#fff'
    }
  },
});

const mapStateToProps = state =>{ //Redux: Get state if user is signed or not
  return {
      isUserLogged: state.isUserLogged
  }
}
export default connect(mapStateToProps,null)(App); //Redux: No disptach necasssary
