import React from 'react';
import Colors from '../UI/Colors';
import Stars from '../UI/Stars';
import AmountButtons from '../AmountButtons';
import classes from './ProductInformation.module.css';
import { Link } from 'react-router-dom';

const ProductInformation = ({ product }) => {
  const { id, stock, price, colors, stars, name, description, company } =
    product;

  return (
    <div className={classes.details}>
      <h2 className={classes.title}>{name}</h2>
      <Stars stars={stars} />
      <span className={classes.price}>$ {price / 100}</span>
      <p className={classes.description}>{description}</p>
      <div className={classes.info}>
        <span>Available :</span>
        <span>{stock}</span>
      </div>
      <div className={classes.info}>
        <span>SKU :</span>
        <span>{id}</span>
      </div>
      <div className={classes.info}>
        <span>Brand :</span>
        <span>{company}</span>
      </div>
      <hr />
      <div className={classes.info}>
        <span>Colors :</span>
        <Colors colors={colors} />
      </div>
      <div className={classes.actions}>
        <AmountButtons />
        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </div>
  );
};

export default ProductInformation;
