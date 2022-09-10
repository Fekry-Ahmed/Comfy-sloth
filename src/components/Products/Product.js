import React from 'react';

import classes from './Product.module.css';
const Product = ({ name, imgUrl, price }) => {
  return (
    <div className={classes.product}>
      <img src={imgUrl} alt="" className={classes.product__img} />
      <div className={classes.product__detailts}>
        <span className={classes.product__name}>{name}</span>
        <span className={classes.product__price}>$ {price}</span>
      </div>
    </div>
  );
};

export default Product;
