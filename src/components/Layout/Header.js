import React from 'react';
import logo from '../../assets/images/logo.svg';

import classes from './Header.module.css';

const navItems = [
   {
    id: 0,
    name: "Home"
   },
   {
    id: 1,
    name: "New"
   },
   {
    id: 2,
    name: "Popular"
   },
   {
    id: 3,
    name: "Trending"
   },
   {
    id: 4,
    name: "Categories"
   }
];

const Header = () => {
    const navList = navItems.map((navItem) => 
        <li 
            key={navItem.id}
            className={classes.li}
        >
            {navItem.name}
        </li>
    );

    return (
        <header className={classes.navContainer}>
            <img src={logo} alt="company logo" />
            <ul className={classes.ul}>
                {navList}
            </ul>
        </header>
    );
};

export default Header;