import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItem/NavigationItem';
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];

    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }

    return (
        <Backdrop show={props.open} clicked={props.closed}>
            <div className={attachedClasses.join(" ")}>
                <div className="LogoSide">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Backdrop>
        
    );
}

export default sideDrawer;