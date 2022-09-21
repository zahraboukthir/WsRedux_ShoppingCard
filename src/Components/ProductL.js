import React from "react";

import { useSelector } from "react-redux";
import ProductC from './ProductC';


function ProductL() {
  const listProd = useSelector((state) => state.listProd);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
      }}
    >
      {listProd.map((el, i) => (
        <ProductC key={el.id} el={el} />
       
      ))}
    </div>
  );
}

export default ProductL;
