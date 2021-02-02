import React from 'react';
import './App.css';
//import LoginPage from './LoginComponents/LoginPage.js';
import UserPage from './UserComponents/UserPage.js'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export default class App extends React.Component{

  render(){
    return(
    <MuiThemeProvider theme={theme}>
    {/*<LoginPage />*/}
    <UserPage />
    </MuiThemeProvider>
    )
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d50057',
    },
    secondary:{
      main:'#fff'
    }
  },
});