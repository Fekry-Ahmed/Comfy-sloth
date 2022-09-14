import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classes from './ProductCard.module.css';

const Product = ({ name, imgUrl, price, id }) => {
  return (
    <div className={classes.product}>
      <div className={classes['product__img-box']}>
        <img src={imgUrl} alt="" className={classes.product__img} />
        <Link className={classes.explore} to={`/products/${id}`}>
          <FaSearch />
        </Link>
      </div>
      <div className={classes.product__detailts}>
        <span className={classes.product__name}>{name}</span>
        <span className={classes.product__price}>$ {price / 100}</span>
      </div>
    </div>
  );
};

export default Product;
