
import React from 'react';
import classes from './catagory.module.css';
import { Link } from 'react-router-dom';

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link
        to={`/catagory/${data.name}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <h2>{data.title}</h2>
        <img src={data.imgLink} alt={data.title} />
        <p style={{ color: '#007185', fontSize: '12px' }}>
          shop now
        </p>
      </Link>
    </div>
  );
}

export default CategoryCard;
