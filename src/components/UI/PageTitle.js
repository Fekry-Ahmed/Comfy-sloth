import React from 'react';
import { Link } from 'react-router-dom';
import classes from './PageTitle.module.css';

const PageTitle = (props) => (
  <div className={classes.wrapper}>
    <div className="container">
      <h2>
        <Link to="/">home</Link>{' '}
        {props.product ? <Link to="/products">/ products</Link> : null} /{' '}
        <span>{props.title}</span>
      </h2>
    </div>
  </div>
);

export default PageTitle;
