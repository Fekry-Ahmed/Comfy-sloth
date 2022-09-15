import React from 'react';
import classes from './FeaturedProducts.module.css';
import { useSelector } from 'react-redux';
import { Loading, Product } from '../index';

const FeaturedProducts = () => {
  const { products, isLoading, error } = useSelector((state) => state.products);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p>can't fetch data</p>;
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
              price={product.price}
              imgUrl={product.image}
            ></Product>
          ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
