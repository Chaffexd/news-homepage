import React from 'react';

import classes from './Panel.module.css';

const Panel = (props) => {
  return (
    <div className={classes.panel}>
        <h3 className={classes.panelTitle}>{props.title}</h3>
        <p className={classes.panelInfo}>{props.info}</p>
    </div>
  );
};

export default Panel;