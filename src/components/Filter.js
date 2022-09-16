import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { Colors } from '../components';
import classes from './Filter.module.css';
import { productsActions } from '../store/products-slice';

const Filter = () => {
  const dispatch = useDispatch();
  const { products, filters } = useSelector((state) => state.products);

  let maxPrice = 0;
  if (products.length > 0) {
    const prices = products.map((p) => p.price);
    maxPrice = Math.max(...prices);
  }

  const categories = getUniqueValues(products, 'category');
  const companies = getUniqueValues(products, 'company');
  const colors = getUniqueValues(products, 'colors');

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'category') {
      value = e.target.textContent;
    }

    if (name === 'colors') {
      value = e.target.dataset.color;
    }

    if (name === 'price') {
      value = Number(value);
    }

    if (name === 'shipping') {
      value = e.target.checked;
    }

    dispatch(productsActions.updateFilters({ name, value }));
  };

  return (
    <section>
      <form
        action=""
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={`${classes['form-control']} ${classes.text} `}>
          <input
            type="text"
            name="text"
            placeholder="search"
            onChange={updateFilters}
          />
        </div>
        <div className={`${classes['form-control']} ${classes.category} `}>
          <h5>category</h5>
          {categories.map((category, index) => (
            <button name="category" key={index} onClick={updateFilters}>
              {category}
            </button>
          ))}
        </div>

        <div className={`${classes['form-control']} ${classes.company} `}>
          <h5>company</h5>
          <select name="company" onChange={updateFilters}>
            {companies.map((company, index) => (
              <option key={index}>{company}</option>
            ))}
          </select>
        </div>

        <div className={`${classes['form-control']} ${classes.colors} `}>
          <h5>colors</h5>
          <Colors colors={colors.slice(1)} onClick={updateFilters} />
        </div>

        <div className={`${classes['form-control']} ${classes.price} `}>
          <h5>price</h5>
          <p>{formatPrice(filters.price)}</p>
          <input
            min="0"
            max={maxPrice + ''}
            name="price"
            value={filters.price}
            type="range"
            onChange={updateFilters}
          />
        </div>

        <div className={`${classes['form-control']} ${classes.shipping} `}>
          <label htmlFor="shipping">free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            onChange={updateFilters}
          />
        </div>

        <button
          type="button"
          className="clear-btn"
          onClick={() => {
            console.log(1);
            dispatch(productsActions.clearFilters());
          }}
        >
          clear filters
        </button>
      </form>
    </section>
  );
};

export default Filter;
