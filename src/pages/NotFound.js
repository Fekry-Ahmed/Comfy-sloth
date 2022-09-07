import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NotFound.module.css';
const NotFound = () => {
  return (
    <section className={`${classes.section} page`}>
      <h1>404</h1>
      <p>Sorry, the page you tried cannot be found</p>
      <Link to="/" className="btn">
        back home
      </Link>
    </section>
  );
};

export default NotFound;
