import React from 'react';
import Panel from './Panel';

import classes from './Side.module.css';

const Side = () => {
  return (
    <div className={classes.sideComponent}>
      <h2 className={classes.title}>New</h2>
      <div className={classes.panelHolder}>
        <Panel 
          title="Hydrogen VS Electric Cars"
          info="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <Panel 
          title="The Downsides of AI Artistry"
          info="What are the possible adverse affects of on-demand AI image generation?"
        />
        <Panel 
          title="Is VC funding drying up?"
          info="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
      </div>
    </div>
  );
};

export default Side;