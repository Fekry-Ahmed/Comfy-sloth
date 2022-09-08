import React from 'react';
import classes from './Contact.module.css';

const Contact = function (props) {
  return (
    <section className={`${classes.contact} section container`}>
      <h3>Join our newsletter and get 20% off</h3>
      <div className={classes.text}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <form action="">
          <input type="text" />
          <button className="btn">subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
