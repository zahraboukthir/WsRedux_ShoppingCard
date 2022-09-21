import React, { useEffect } from "react";
import "./c.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { details,addtocard, likeprod } from "./../rdx/cardActions";
import { AiFillHeart } from "react-icons/ai";
const C = () => {
  const dispatch = useDispatch();
  const { idprod } = useParams();
  useEffect(() => {
    dispatch(details(idprod));
  }, [dispatch,idprod]);

  const pd = useSelector((state) => state.proddetails);
  return (
    <main className="containerc">
      {/* Left Column / Headphones Image */}
      <div className="left-column">
        <img data-image="black" src={pd.img} alt="" />
        <img data-image="blue" src={pd.img} alt="" />
        <img data-image="red" className="active" src={pd.img} alt="" />
      </div>
      {/* Right Column */}
      <div className="right-column">
        {/* Product Description */}
        <div className="product-description">
          <AiFillHeart
                    
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => dispatch(likeprod(idprod))}
                    className={pd.like ? "like" : null}
                  />
          <h1>{pd.title}</h1>
          <p>
          Quantity: {pd.qte}
          </p>
        </div>

        {/* Product Pricing */}
        <div className="product-price">
          <span>{pd.price}</span>
          <button onClick={() =>
                      dispatch(addtocard({ ...pd }))
                    } className="cart-btn">
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default C;
