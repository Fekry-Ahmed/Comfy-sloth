import React, { useState } from 'react';
import classes from './AmountButtons.module.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const AmountButtons = () => {
  const [amount, setAmount] = useState(0);

  const decrease = () => {
    setAmount((prev) => prev - 1);
  };
  const increase = () => {
    setAmount((prev) => prev + 1);
  };

  return (
    <div className={classes.wrapper}>
      <button onClick={decrease}>
        <FaMinus />
      </button>
      <span>{amount} </span>
      <button onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
