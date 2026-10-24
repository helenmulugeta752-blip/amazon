import React from 'react';
import classes from './product.module.css';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;

  return (
    <div className={classes.productCard}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>

        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>

        <CurrencyFormat amount={price} />

        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;