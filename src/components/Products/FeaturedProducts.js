import React, { useEffect } from 'react';
import classes from './FeaturedProducts.module.css';
import { Loading, Product } from '../index';
import useHttp from '../../hooks/use-http';
import { getAllProducts } from '../../utils/api';

const FeaturedProducts = () => {
  const {
    sendRequest,
    status,
    data: products,
    error,
  } = useHttp(getAllProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return <Loading />;
  }

  if (error) {
    return <p>Some thing went wrong</p>;
  }

  return (
    <section className={`${classes.section} section`}>
      <h2 className={`title`}>Featured Products</h2>
      <div className={`container  ${classes.container} `}>
        {products
          .filter((product) => product.featured)
          .map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={(product.price / 100).toFixed(2)}
              imgUrl={product.image}
            ></Product>
          ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
