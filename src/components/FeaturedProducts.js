import React from 'react';
import Product from './Product';
import classes from './FeaturedProducts.module.css';

const FeaturedProducts = ({ products }) => {
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
