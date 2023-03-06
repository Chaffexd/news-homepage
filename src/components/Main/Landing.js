import React from 'react';
import Main from './Main';
import Side from './Side';

import classes from './Landing.module.css';

const Landing = (props) => {
  return (
    <div className={classes.newsLanding}>
        <Main 
            title="The Bright Future of Web 3.0?"
            paragraph="We dive into the next evolution of the web that claims to put power of the platforms
            back into the hands of the people. But is it really fulfilling it's promise?"
            onClick={props.onClick}
        />
        <Side />
    </div>
  )
};

export default Landing;