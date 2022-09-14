import React from 'react';
import { useSelector } from 'react-redux';
import { Sort, GridView, Filter, PageTitle, ListView } from '../components';

import classes from './Products.module.css';

const Products = () => {
  const isGridView = useSelector((state) => state.products.gridView);

  return (
    <>
      <PageTitle title="products" />
      <div className={`${classes.wrapper} container section`}>
        <Filter />
        <Sort className={classes.sort} />
        {isGridView && <GridView />}
        {!isGridView && <ListView />}
      </div>
    </>
  );
};

export default Products;
