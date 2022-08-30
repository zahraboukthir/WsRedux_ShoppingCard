import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { details } from "./../rdx/cardActions";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { idprod } = useParams();
  useEffect(() => {
    dispatch(details(idprod));
  }, []);

  const pd = useSelector((state) => state.proddetails);

  return (
    <div className="container">
      {pd.title}
      <img src={pd.img} alt="" />
      {pd.price}
      {pd.qte}
    </div>
  );
};

export default ProductDetails;
