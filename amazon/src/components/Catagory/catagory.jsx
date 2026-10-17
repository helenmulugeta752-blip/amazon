import React from 'react';
import { catagoryImages } from './catagoryinfo';
import CatagoryCard from './catagoryCard';
import classes from "./catagory.module.css";
function Catagory() {
  return (
    <div className={classes.category_container}>
      {catagoryImages.map((data, index) => (
        <CatagoryCard key={index} data={data} />
      ))}
    </div>
  );
}

export default Catagory;