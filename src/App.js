import React from 'react';
import './App.css';
import LoginPage from './LoginComponents/LoginPage.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export default class App extends React.Component{

  render(){
    return(
    <MuiThemeProvider theme={theme}>
      <LoginPage />
    </MuiThemeProvider>
    )
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d50057',
    }
  },
});