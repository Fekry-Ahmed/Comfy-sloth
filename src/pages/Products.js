import React from 'react';
import { Sort, GridView, Filter } from '../components';

import classes from './Products.module.css';

const Products = () => {
  return (
    <div className={`${classes.wrapper} container section`}>
      <Filter />
      <Sort className={classes.sort} />
      <GridView />
    </div>
  );
};

export default Products;
