import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  Home,
  About,
  Products,
  ProductDetail,
  Cart,
  Chekout,
  NotFound,
} from './pages';

import { Header, Footer } from './components';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Chekout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
