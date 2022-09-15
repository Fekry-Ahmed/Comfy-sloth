import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import classes from './Colors.module.css';

const Colors = ({ colors }) => {
  const [mainColor, setMainColor] = useState(colors[0]);
  console.log(colors);

  return (
    <div className={classes.colors}>
      {colors.map((color, index) => (
        <button
          onClick={() => setMainColor(color)}
          className={`${classes.color}`}
          key={index}
          style={{
            backgroundColor: color,
          }}
        >
          {mainColor === color ? <FaCheck /> : null}
        </button>
      ))}
    </div>
  );
};

export default Colors;
