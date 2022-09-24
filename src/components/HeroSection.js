import React from 'react';

import classes from './HeroSection.module.css';
import heroImg1 from '../assets/hero-bcg.jpeg';
import heroImg2 from '../assets/hero-bcg-2.jpeg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className={`section page-small ${classes.section}`}>
      <div className={`${classes.container} container`}>
        <div className={classes.text}>
          <h1>design your comfort zone</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to="/comfy-sloth/products" className="btn">
            shop now
          </Link>
        </div>
        <div className={classes.img__box}>
          <img src={heroImg1} alt="nice table" />
          <img src={heroImg2} alt="man working" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
