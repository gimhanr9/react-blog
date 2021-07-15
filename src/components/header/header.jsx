import React from 'react';

import classes from './header.module.css';

function Header (props){
    return(
        <div className={classes.header}>
            {props.children}


        </div>
    );
}

export default Header;