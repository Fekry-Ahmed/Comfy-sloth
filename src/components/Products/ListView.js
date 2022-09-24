import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../UI/Loading';
import classes from './ListView.module.css';

const GridView = (props) => {
  const { filteredProducts, isLoading, error } = useSelector(
    (state) => state.products
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className={classes.wrapper}>
      {filteredProducts.map((product) => (
        <div className={classes.product} key={product.id}>
          <div className={classes.product__img}>
            <img src={product.image} alt="" />
          </div>
          <div className={classes.product__text}>
            <h3 className={classes.product__name}>{product.name}</h3>
            <span className={classes.product__price}>
              {' '}
              $ {product.price / 100}
            </span>
            <p className={classes.product__description}>
              {`${product.description.substring(0, 150)} ...`}
            </p>
            <Link to={`/comfy-sloth/products/${product.id}`} className="btn">
              details
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GridView;
