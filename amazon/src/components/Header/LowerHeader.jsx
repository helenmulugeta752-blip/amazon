
import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import classes from './Header.module.css';

function LowerHeader() {
  return (
    <nav className={classes.lowerHeader}>
      <ul>
        <li className={classes.menuItem}>
          <CiMenuBurger />
          <span>All</span>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </nav>
  );
}

export default LowerHeader;
