
import React, { useState, useEffect } from 'react';
import Layout from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/product/productCard';
import classes from './Results.module.css';

function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${productUrl}/products/catagory/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>

        <p style={{ padding: '30px' }}>
          Category / {categoryName}
        </p>

        <hr />

        {loading ? (
          <h2>Loading products...</h2>
        ) : (
          <div className={classes.products_container}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
