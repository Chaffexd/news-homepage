import React from 'react';
import mobilePhoto from '../../assets/images/image-web-3-mobile.jpg';
import Side from '../Main/Side';
import MobileLanding from './MobileLanding';

import classes from './MobileMain.module.css';

const MobileMain = (props) => {
  return (
    <div>
        <img src={mobilePhoto} alt="" className={classes.mobileLanding} />
        <MobileLanding 
            title="The Bright Future of Web 3.0?"
            paragraph="We dive into the next evolution of the web that claims to put power of the platforms
            back into the hands of the people. But is it really fulfilling it's promise?"
            onClick={props.onClick}
        />
        <Side />
        
    </div>
  )
};

export default MobileMain;