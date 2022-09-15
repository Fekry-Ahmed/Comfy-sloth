import React from 'react';
import { useSelector } from 'react-redux';
import { getUniqueValues } from '../utils/helpers';
import { Colors, colors } from '../components';
import classes from './Filter.module.css';

const Filter = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);

  const categories = getUniqueValues(products, 'category');
  const companies = getUniqueValues(products, 'company');
  const colors = getUniqueValues(products, 'colors');

  console.log(categories, companies, colors);

  return (
    <section>
      <form
        action=""
        className={classes.from}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={`${classes['form-control']} ${classes.text} `}>
          <input type="text" name="text" placeholder="search" />
        </div>
        <div className={`${classes['form-control']} ${classes.category} `}>
          <h5>category</h5>
          {categories.map((category, index) => (
            <button>{category}</button>
          ))}
        </div>
        <div className={`${classes['form-control']} ${classes.company} `}>
          <h5>company</h5>
          <select name="a" id="">
            {companies.map((company, index) => (
              <option>{company}</option>
            ))}
          </select>
        </div>
        <div className={`${classes['form-control']} ${classes.colors} `}>
          <h5>colors</h5>
          <Colors colors={colors.slice(1)} />
        </div>
        <div className={`${classes['form-control']} ${classes.price} `}>
          <h5>price</h5>
          <input type="range" />
        </div>
        <div className={`${classes['form-control']} ${classes.shipping} `}>
          <label htmlFor="shipping">free shipping</label>
          <input type="checkbox" name="" id="shipping" />
        </div>
        <button type="button" className="clear-btn">
          clear filters
        </button>
      </form>
    </section>
  );
};

export default Filter;
