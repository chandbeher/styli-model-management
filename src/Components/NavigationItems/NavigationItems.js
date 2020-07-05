import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Moels</NavigationItem>
        <NavigationItem link="/build">Build Model</NavigationItem>
    </ul>
);

export default navigationItems;