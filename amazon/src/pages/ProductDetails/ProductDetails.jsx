import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/product/productCard'

function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [productId])

  return (
    <LayOut>
      <ProductCard 
        product={product}
      />
    </LayOut>
  )
}

export default ProductDetail