import React from 'react';
import { Sort, GridView, Filter } from '../components';

import classes from './Products.module.css';

const Products = () => {
  return (
    <div className={`${classes.wrapper} container section`}>
      <Sort className={classes.sort} />
      <Filter />
      <GridView />
    </div>
  );
};

export default Products;
