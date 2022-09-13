import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './utils/api';
import { productsActions } from './store/products-slice';
import { Header, Footer } from './components';

import {
  Home,
  About,
  Products,
  ProductDetail,
  Cart,
  Chekout,
  NotFound,
} from './pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(productsActions.fetchProducts());
      try {
        const data = await getAllProducts();
        dispatch(productsActions.success(data));
      } catch (error) {
        dispatch(productsActions.error);
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Chekout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
