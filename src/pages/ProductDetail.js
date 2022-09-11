import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleProduct } from '../utils/api';
import useHttp from '../hooks/use-http';
import {
  Loading,
  PageTitle,
  ProductImages,
  ProductInformation,
} from '../components';
import classes from './ProductDetails.module.css';

const ProductDetail = () => {
  const { id } = useParams();
  const {
    sendRequest,
    data: product,
    status,
    error,
  } = useHttp(getSingleProduct, true);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  const { images, name } = product;

  if (status === 'pending') {
    return <Loading />;
  }

  if (error) {
    return <p>Can't find the product</p>;
  }

  if (status === 'completed') {
    return (
      <>
        <PageTitle product title={name} />
        <section className="section container">
          <Link to="/products" className="btn">
            back to products
          </Link>
          <div className={classes.wrapper}>
            <ProductImages images={images} />
            <ProductInformation product={product} />
          </div>
        </section>
      </>
    );
  }
};

export default ProductDetail;
