
import React from 'react';
import classes from './product.module.css';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Rating from '@mui/material/Rating';

function ProductCard({ product }) {
  const { image, title, rating, price } = product;

  return (
    <div className={classes.productCard}>
      <a href="#">
        <img src={image} alt={title} />
      </a>

      <div>
        <h3>{title}</h3>

        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>

        <CurrencyFormat amount={price} />

        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
