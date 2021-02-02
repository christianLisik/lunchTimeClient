import { React, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

export default function LoginForm() {

    let [emailLoginState, setEmailLoginState] = useState(""),
        [passwordLoginState, setPasswordLoginState] = useState(""),
        [isButtonLoginClickedState, setIsButtonLoginClickedState] = useState(false),
        [isTextFieldEmailLoginFalse,setIsTextFieldEmailLoginFalse] = useState(false),
        [isTextFieldPasswordLoginFalse,setIsTextFieldPasswordLoginFalse] = useState(false),
        [submitButtonState, setSubmitButtonState] = useState("Anmelden"),
        [errorLoginTextState,setErrorLoginTextState] = useState("");

    //Set all initilized states to the values how they were initilized first. Is needed to remove all errror messages if user clicked on the submit button to send the request
    const initStatesAgain= () =>{

        setIsTextFieldEmailLoginFalse(isTextFieldEmailLoginFalse=false);
        setIsTextFieldPasswordLoginFalse(isTextFieldPasswordLoginFalse=false);
        setErrorLoginTextState(errorLoginTextState="");
        setSubmitButtonState(submitButtonState="Anmelden");
        setIsButtonLoginClickedState(isButtonLoginClickedState=false);
    }

    //Check if textfields for Email and Password are empty. If empty show error message that they are empty if not delete error message
    const validateTextFields = ()=>{

        if(emailLoginState.length===0){
            setIsTextFieldEmailLoginFalse(isTextFieldEmailLoginFalse=true);
        }
        if(passwordLoginState.length===0){
            setIsTextFieldPasswordLoginFalse(isTextFieldPasswordLoginFalse=true)
        }
        if(emailLoginState.length !==0 && passwordLoginState.length !== 0){
            setIsTextFieldEmailLoginFalse(isTextFieldEmailLoginFalse=false);
            setIsTextFieldPasswordLoginFalse(isTextFieldPasswordLoginFalse=false);
            return true;
        }
        return false;
    }

    //After submit button was clicked check if user values are correct and link forward to user page if not show error messages
    const submitLogin = event => {
        event.preventDefault();

        if(validateTextFields()){
            setIsButtonLoginClickedState(isButtonLoginClickedState=true);
            setSubmitButtonState(submitButtonState=<CircularProgress size="30px" />);
    
            if(emailLoginState === "christian.lisik@gmx.net" && passwordLoginState === "ultima001!") {
                initStatesAgain();
                console.log("login is true");
            } else {
                initStatesAgain();
                console.log("login is false");
                setErrorLoginTextState(errorLoginTextState= <Alert severity="error">E-Mail oder Passwort falsch</Alert>);
            }
        }else{
            setErrorLoginTextState(errorLoginTextState= <Alert severity="error">Bitte füllen Sie die rotmarkierten Felder aus</Alert>);
        }
    }

    return (
        <div className="loginForm">
            <span className="loginText">Anmeldung</span>
            <div className="loginFormContainer">
                <form noValidate onSubmit={submitLogin}>
                    <TextField
                        value={emailLoginState}
                        error={isTextFieldEmailLoginFalse}
                        onChange={event => {
                            setIsTextFieldEmailLoginFalse(
                                isTextFieldEmailLoginFalse=false
                                );
                            setEmailLoginState(
                                emailLoginState = event.target.value
                            )
                        }
                        }
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        value={passwordLoginState}
                        error={isTextFieldPasswordLoginFalse}
                        onChange={event => {
                            setIsTextFieldPasswordLoginFalse(
                                isTextFieldPasswordLoginFalse=false
                                );
                            setPasswordLoginState(
                                passwordLoginState = event.target.value
                            )
                        }
                        }
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <div className="loginErrorText">{errorLoginTextState}</div>
                    <br />
                    <br />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        color="primary"
                        disabled={isButtonLoginClickedState}
                    >
                        {submitButtonState}
                    </Button>
                    <br />
                    <br />
                    <Button
                        variant="outlined"
                        fullWidth
                        size="large"
                        color="primary"
                    >
                        Passwort vergessen?
                    </Button>
                </form>
            </div>
        </div>
    );
}