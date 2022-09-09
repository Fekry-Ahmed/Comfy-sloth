import React, { useEffect } from 'react';
import { getAllProducts } from '../utils/api';
import useHttp from '../hooks/use-http';
import FeaturedProducts from '../components/FeaturedProducts';

import { Contact, Services, HeroSection } from '../components';

const Home = () => {
  const { sendRequest, data, status } = useHttp(getAllProducts, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let featuredProducts = [];
  if (status === 'completed') {
    featuredProducts = data.filter((product) => product.featured);
  }

  console.log(featuredProducts);

  return (
    <>
      <HeroSection></HeroSection>
      <FeaturedProducts products={featuredProducts}></FeaturedProducts>
      <Services></Services>
      <Contact></Contact>
    </>
  );
};

export default Home;
