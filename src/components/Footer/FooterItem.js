import React from 'react';

import classes from './FooterItem.module.css';

const images = [
    {
        id: "img1",
        source: require("../../assets/images/image-retro-pcs.jpg"),
        number:"01",
        title:"Reviving Retro PCs",
        info:"What happens when old PCs are given modern upgrades?"
    },
    {
        id: "img2",
        source: require("../../assets/images/image-top-laptops.jpg"),
        number:"02",
        title:"Top 10 Laptops of 2022",
        info:"Our best picks for various needs and budgets."
    },
    {
        id: "img3",
        source: require("../../assets/images/image-gaming-growth.jpg"),
        number:"03",
        title:"The Growth of Gaming",
        info:"How the pandemic has sparked fresh opportunities."
    }
];

const FooterItem = () => {
    const imageSource = images.map((image) => 
    <div className={classes.itemContainer} key={image.id}>
        <img 
            src={image.source} 
            alt="" 
            className={classes.image} 
        />
        <div className={classes.footerItems}>
                <h2 className={classes.h2}>{image.number}</h2>
                <h3 className={classes.h3}>{image.title}</h3>
                <p className={classes.p}>{image.info}</p>
        </div>
    </div>
    )

    return (
        <div className={classes.itemContainer}>
            {imageSource}
        </div>
    );
};

export default FooterItem;