import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';



const LoginFooter = () => {
    return (
        <div className="loginFooter">
            <div className="loginFooterContainer">
              <span className="followUsText">Follow us:</span>
         
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              
           </div>
        </div>
    );
};

export default LoginFooter;