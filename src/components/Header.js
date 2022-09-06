import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';

import logo from '../assets/logo.svg';
import classes from './Header.module.css';
import { links } from '../utils/constants';

const Header = () => {
  return (
    <header>
      <div className={`container ${classes.header__container}`}>
        <Link to="/" className={classes.logo}>
          <img src={logo} alt="logo" className={classes.logo__img} />
        </Link>
        <nav className={classes.nav}>
          <ul className={classes.nav__list}>
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    `${isActive ? classes.active : ''} ${classes.nav__link}`
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.actions}>
          <Link to="/cart" className={classes.cart} data-count={5}>
            <span>cart</span>
            <FaShoppingCart></FaShoppingCart>
          </Link>
          <div className={classes.login}>
            <span>login</span>
            <FaUserPlus></FaUserPlus>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
