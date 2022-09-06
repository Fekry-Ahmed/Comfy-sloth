import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h5>
        &copy; {new Date().getFullYear()} <span>comfy sloth</span>
      </h5>
      <h5> All rights reversed </h5>
    </footer>
  );
};

export default Footer;
