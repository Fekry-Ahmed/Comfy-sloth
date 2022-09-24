import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartHeader, PageTitle, CartItem } from '../components';
import classes from './Cart.module.css';
import { cartActions } from '../store/cart-slice';

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  if (cartItems.length === 0) {
    return (
      <section className={`container section page ${classes['empty-cart']}`}>
        <h2>Your cart is empty</h2>
        <Link to="/comfy-sloth/products" className="btn">
          fill it
        </Link>
      </section>
    );
  }

  return (
    <>
      <PageTitle title="cart" />
      <section className="section container page">
        <CartHeader />
        <ul className={classes.cartList}>
          {cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </ul>
        <div className={`${classes.actions} container `}>
          <Link to="/comfy-sloth/products" className="btn">
            continue shopping
          </Link>
          <button
            onClick={() => {
              dispatch(cartActions.clearCart());
            }}
          >
            clear shopping cart
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;
