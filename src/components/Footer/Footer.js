import React from 'react';

import classes from './Footer.module.css';
import FooterItem from './FooterItem';

const Footer = () => {
  return (
    <div className={classes.footer}>
        <FooterItem />
    </div>
  );
};

export default Footer;