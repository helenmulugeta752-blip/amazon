
import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductCard from '../../components/product/productCard'

function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productId])

  return (
    <LayOut>
      {loading ? (
        <h2>Loading product...</h2>
      ) : (
        <ProductCard product={product} />
      )}
    </LayOut>
  )
}

export default ProductDetail
