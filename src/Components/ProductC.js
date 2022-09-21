import React from "react";

import { AiFillHeart } from "react-icons/ai";
import "./pdcard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocard, likeprod } from "./../rdx/cardActions";
function ProductC({ el: { id, title, price, img, qte, like } }) {
  // const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className=" page-wrapper" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="page-inner">
        <div>
          <div className="el-wrapper">
            <div className="box-up">
              <Link to={`/review/${id}`}>
                <img className="img" src={img} alt="" />
              </Link>
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{title}</span>
                  <span className="p-company">Quantity:{qte}</span>
                  <AiFillHeart
                    width="20px"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => dispatch(likeprod(id))}
                    className={like ? "like" : null}
                  />
                </div>
                <div className="a-size">
                  Available sizes : <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>
            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner" />
              </div>
              <span className="cart">
                <span className="price">{price} dt</span>
                <span className="add-to-cart">
                  <span
                    className="txt"
                    onClick={() =>
                      dispatch(addtocard({ id, title, price, img, qte }))
                    }
                  >
                    Add in cart
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductC;
