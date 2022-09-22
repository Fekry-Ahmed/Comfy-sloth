import React from 'react';
import { BsList, BsFillGridFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../store/products-slice';
import classes from './Sort.module.css';

const Sort = (props) => {
  const dispatch = useDispatch();
  const { gridView: isGridView, filteredProducts } = useSelector(
    (state) => state.products
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.view__buttons}>
        <BsList
          className={!isGridView ? classes.active : null}
          onClick={() => {
            dispatch(productsActions.setListView());
          }}
        />
        <BsFillGridFill
          className={isGridView ? classes.active : null}
          onClick={() => {
            dispatch(productsActions.setGridView());
          }}
        />
      </div>
      <span className={classes.count}>
        {filteredProducts.length} products found
      </span>
      <form className={classes.form}>
        <span>sort by</span>
        <select
          name="sort"
          id="sort"
          onChange={(e) => {
            console.log(1);
            dispatch(productsActions.sortProducts(e.target.value));
          }}
        >
          <option value="priceLow">price (highest)</option>
          <option value="PriceHigh">price (lowest)</option>
          <option value="A_to_Z">name (A - Z)</option>
          <option value="Z_to_A">name (Z - A)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
