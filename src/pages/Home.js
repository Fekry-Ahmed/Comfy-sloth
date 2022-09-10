import React from 'react';
import FeaturedProducts from '../components/Products/FeaturedProducts';

import { Contact, Services, HeroSection } from '../components';
const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <FeaturedProducts></FeaturedProducts>
      <Services></Services>
      <Contact></Contact>
    </>
  );
};

export default Home;
