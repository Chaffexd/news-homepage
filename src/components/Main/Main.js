import React from 'react';
import mainImage from '../../assets/images/image-web-3-desktop.jpg';

import classes from './Main.module.css';

const Main = (props) => {
  return (
    <div className={classes.leftContainer}>
        <img src={mainImage} alt="Web 3 img" className={classes.img} />
        <div className={classes.subContainer}>
            <div className={classes.titleContainer}>
                <h2>{props.title}</h2>
            </div>
            <div className={classes.infoContainer}>
                <p>
                    {props.paragraph}
                </p>
                <button className={classes.button}>READ MORE</button>
            </div>
        </div>
    </div>
  )
};

export default Main;