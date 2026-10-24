import React from 'react';
import classes from './product.module.css';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

function ProductCard({ product, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = product;

  return (
    <div className={classes.productCard} style={{ display: flex ? 'flex' : 'block', gap: '20px' }}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>

        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count}</small>
        </div>

        <CurrencyFormat amount={price} />

        {renderDesc && <p>{description}</p>}

        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;