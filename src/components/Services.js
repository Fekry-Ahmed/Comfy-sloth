import React from 'react';
import classes from './Services.module.css';
import { services } from '../utils/constants';

const Services = () => {
  return (
    <section className={classes.section}>
      <div className={`${classes.container} container section`}>
        <div className={classes.heading}>
          <h2>Custom Furniture Built Only For You</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className={classes.cards}>
          {services.map((service) => {
            const { id, icon, text, title } = service;
            return (
              <article key={id} className={classes.card}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
