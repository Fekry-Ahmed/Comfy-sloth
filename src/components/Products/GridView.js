import React from 'react';
import { useSelector } from 'react-redux';
import Product from './ProductCard';
import Loading from '../UI/Loading';
import classes from './GridView.module.css';

const GridView = (props) => {
  const { products, isLoading, error } = useSelector((state) => state.products);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className={classes.wrapper}>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          imgUrl={product.image}
          price={product.price}
          id={product.id}
        />
      ))}
    </section>
  );
};

export default GridView;
