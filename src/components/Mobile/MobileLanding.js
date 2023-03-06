import React from 'react';

import classes from './MobileLanding.module.css';

const MobileLanding = (props) => {
  return (
    <div>
        <h1 className={classes.header}>{props.title}</h1>
        <p className={classes.paragraph}>{props.paragraph}</p>
        <button className={classes.button} onClick={props.onClick}>READ MORE</button>
    </div>
  )
};

export default MobileLanding;