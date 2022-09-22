import React, { useState } from 'react';
import classes from './AmountButtons.module.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const AmountButtons = (props) => {
  return (
    <div className={classes.wrapper}>
      <button onClick={props.decrease}>
        <FaMinus />
      </button>
      <span>{props.amount} </span>
      <button onClick={props.increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
