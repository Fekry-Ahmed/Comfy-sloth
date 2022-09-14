import React from 'react';
import { BsList, BsFillGridFill } from 'react-icons/bs';
import classes from './Sort.module.css';

const Sort = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.view__buttons}>
        <BsList className={classes.active} />
        <BsFillGridFill />
      </div>
      <span className={classes.count}>2 products found</span>
      <form className={classes.form}>
        <span>sort by</span>
        <select name="sort" id="sort">
          <option value="priceLow">price (highest)</option>
          <option value="PiceHigh">price (lowest)</option>
          <option value="A_to_Z">name (A - Z)</option>
          <option value="Z_to_A">name (Z - A)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
