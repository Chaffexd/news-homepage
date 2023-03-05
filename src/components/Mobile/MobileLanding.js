import React from 'react';

import classes from './MobileLanding.module.css';

const MobileLanding = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
    </div>
  )
};

export default MobileLanding;