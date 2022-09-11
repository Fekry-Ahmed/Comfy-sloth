import { useState } from 'react';
import classes from './ProductImages.module.css';

const ProductImages = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div className={classes.wrapper}>
      <img className={classes['main-img']} src={mainImage.url} alt="" />
      <div className={classes.gallery}>
        {images.map((image, index) => (
          <img
            className={mainImage === image ? classes.active : null}
            src={image.url}
            key={index}
            alt="images"
            onClick={() => {
              setMainImage(images[index]);
            }}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
