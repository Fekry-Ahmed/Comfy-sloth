import React from 'react';

import classes from './CartHeader.module.css';
const CartHeader = () => {
  return (
    <ul className={classes.wrapper}>
      <li>item</li>
      <li>price</li>
      <li>quantity</li>
      <li>subtotal</li>
    </ul>
  );
};

export default CartHeader;
