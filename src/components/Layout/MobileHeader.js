import React, { useState } from 'react';
import MobileNav from '../../assets/images/icon-menu.svg';
import logo from '../../assets/images/logo.svg';
import mobileClicked from '../../assets/images/icon-menu-close.svg';

import classes from './MobileHeader.module.css';

const Overlay = () => (
  <div className={classes.open} >
    <li>Home</li>
    <li>New</li>
    <li>Popular</li>
    <li>Trending</li>
    <li>Categories</li>
  </div>
)

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.mobileNav}>
        <img src={logo} alt="" />
        <span>
            {isOpen ? 
            <>
              <img src={mobileClicked} alt="" className={classes.burger} onClick={() => setIsOpen(false)} />
              <Overlay />
            </>
            : 
            <img src={MobileNav} alt="" className={classes.burger} onClick={() => setIsOpen(true)}
            />}
        </span>
    </div>
  );
};

export default MobileHeader;