import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';

const ForgotPasswordForm = () => {
    return (

        <div className="loginForm">
            <span className="loginText">Passwort vergessen?</span>
            <hr />
            <div className="loginFormContainer">
            <form noValidate>
                    <TextField
                        value=""
                        error=""
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                    />
                    <TextField
                        value=""
                        error=""
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="email repeat"
                        label="Email wiederholen"
                        type="email repeat"
                        id="email repeat"
                    />
                    <div className="loginErrorText">
                    {/* Error MEssages Box */}
                    </div>
                    <br />
                    <br />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        color="primary"
                    >
                        ÄNDERN
                    </Button>
                    <br />
                    <br />
                    <Button
                        variant="outlined"
                        fullWidth
                        size="large"
                        color="primary"
                    >
                       <Link className="link" to="/">Zurück zu Login</Link> 
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;