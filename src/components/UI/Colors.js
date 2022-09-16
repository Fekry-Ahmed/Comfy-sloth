import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import classes from './Colors.module.css';

const Colors = ({ colors, onClick }) => {
  const [mainColor, setMainColor] = useState(colors[0]);

  return (
    <div className={classes.colors}>
      {colors.map((color, index) => (
        <button
          data-color={color}
          name="colors"
          onClick={(e) => {
            if (onClick) onClick(e);
            setMainColor(color);
          }}
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
