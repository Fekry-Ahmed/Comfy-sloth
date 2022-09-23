import React from 'react';
import AmountButtons from '../AmountButtons';
import classes from './CartItem.module.css';
import { FaTrash } from 'react-icons/fa';
import { formatPrice } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const { id, image, color, price, name, amount, totalPrice } = item;
  console.log(color);
  const increase = () => {
    dispatch(cartActions.increaseItemAmount(id));
  };
  const decrease = () => {
    console.log(1);
    dispatch(cartActions.decreaseItemAmount(id));
  };
  return (
    <li className={classes.wrapper}>
      <div className={classes.item}>
        <img src={image} alt="" className={classes.item__img} />
        <div className={classes.item__details}>
          <h4 className={classes.item__name}>{name}</h4>
          <div className={classes.item__color}>
            <span>color : </span>
            <span
              style={{ backgroundColor: color }}
              className={classes.color}
            ></span>
          </div>
        </div>
      </div>
      <p className={classes.price}>{formatPrice(price)}</p>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <span className={classes.subprice}>{formatPrice(totalPrice)}</span>
      <span
        className={classes.trash}
        onClick={() => {
          dispatch(cartActions.removeItemFromCart(id));
        }}
      >
        <FaTrash />
      </span>
    </li>
  );
};

export default CartItem;
