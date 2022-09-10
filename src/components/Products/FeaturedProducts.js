import React from 'react';
import classes from './FeaturedProducts.module.css';
import { useSelector } from 'react-redux';
import { Loading, Product } from '../index';

const FeaturedProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className={`${classes.section} section`}>
      <h2 className={`title`}>Featured Products</h2>
      <div className={`container  ${classes.container} `}>
        {products.map((product) => (
          <Product
            key={product.id}
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
