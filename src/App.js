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
          <Route path="/comfy-sloth/" element={<Home />} />
          <Route path="/comfy-sloth/about" element={<About />} />
          <Route path="/comfy-sloth/cart" element={<Cart />} />
          <Route path="/comfy-sloth/products" element={<Products />} />
          <Route path="/comfy-sloth/products/:id" element={<ProductDetail />} />
          <Route path="/comfy-sloth/checkout" element={<Chekout />} />
          <Route path="/comfy-sloth/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
