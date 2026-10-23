
import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import LowerHeader from './LowerHeader';
import { FaSearch, FaCartArrowDown } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';

function Header() {
  return (
    <header className={classes.header}>
      <section className={classes.topHeader}>
        <div className={classes.logoLocation}>
          <Link to="/" className={classes.logo}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon"
            />
          </Link>

          <div className={classes.location}>
            <CiLocationOn />
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={classes.search}>
          <select aria-label="Search category">
            <option>All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <button aria-label="Search">
            <FaSearch />
          </button>
        </div>

        <div className={classes.rightHeader}>
          <div className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
              alt="USA"
            />
            <span>EN</span>
          </div>

          <Link to="/auth" className={classes.navLink}>
            <p>Sign in</p>
            <span>Account and Lists</span>
          </Link>

          <Link to="/order" className={classes.navLink}>
            <p>Returns</p>
            <span>and Orders</span>
          </Link>

          <Link to="/cart" className={classes.cart}>
            <FaCartArrowDown />
            <span>0</span>
          </Link>
        </div>
      </section>

      <LowerHeader />
    </header>
  );
}

export default Header;
