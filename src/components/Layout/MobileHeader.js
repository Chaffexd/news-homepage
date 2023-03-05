import React from 'react';
import MobileNav from '../../assets/images/icon-menu.svg';
import logo from '../../assets/images/logo.svg';

import classes from './MobileHeader.module.css';

const MobileHeader = () => {
  return (
    <div className={classes.mobileNav}>
        <img src={logo} alt="" />
        <span>
            <img src={MobileNav} alt="" className={classes.burger} />
        </span>
    </div>
  );
};

export default MobileHeader;