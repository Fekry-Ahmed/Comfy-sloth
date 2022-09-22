import React, { useState } from 'react';
import Colors from '../UI/Colors';
import Stars from '../UI/Stars';
import AmountButtons from '../AmountButtons';
import classes from './ProductInformation.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductInformation = ({ product }) => {
  const [amount, setAmount] = useState(1);

  const decrease = () => {
    setAmount((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  };
  const increase = () => {
    setAmount((prev) => prev + 1);
  };

  const dispatch = useDispatch();

  const {
    id,
    stock,
    price,
    colors,
    stars,
    name,
    description,
    company,
    images,
  } = product;

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
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => {
            dispatch(
              cartActions.addItemToCart({
                name,
                id,
                price,
                image: images[0].url,
                amount,
              })
            );
          }}
        >
          add to cart
        </Link>
      </div>
    </div>
  );
};

export default ProductInformation;
