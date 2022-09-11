import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import classes from './Stars.module.css';

const Stars = ({ stars }) => {
  const starClass = classes.star;

  return (
    <div className={classes.stars}>
      {Array.from({ length: 5 }, (_, i) =>
        i + 1 <= stars ? (
          <BsStarFill className={starClass} />
        ) : i + 0.5 <= stars ? (
          <BsStarHalf className={starClass} />
        ) : (
          <BsStar className={starClass} />
        )
      )}
    </div>
  );
};

export default Stars;
