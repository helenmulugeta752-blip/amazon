
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './productCard';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <section>
      {products.map((singleProduct) => {
        return (
          <ProductCard
            product={singleProduct}
            key={singleProduct.id}
          />
        );
      })}
    </section>
  );
}

export default Product;
