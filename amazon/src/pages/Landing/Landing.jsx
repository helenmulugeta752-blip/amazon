import React from 'react'
import LayOut from '../../components/LayOut/LayOut';
import Carousel from'../../components/Carousel/Carousel';
import Catagory from '../../components/Catagory/catagory';
import Product from '../../components/product/product';
function Landing() {
  return (
    <LayOut>
         <Carousel/>
      <Catagory/>
      <Product/>
    </LayOut>
  )
}

export default Landing