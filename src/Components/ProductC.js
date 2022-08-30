import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiFillHeart } from "react-icons/ai";
import "./pdcard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocard } from "./../rdx/cardActions";
function ProductC({ el: { id, title, price, img, qte } }) {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Link to={`/review/${id}`}>
          {" "}
          <Card.Img variant="top" src={img} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Price:{price}
            <br />
            Quantity:{qte}
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => dispatch(addtocard({ id, title, price, img, qte }))}
          >
            Add to card
          </Button>

          <AiFillHeart
            onClick={() => setLike(!like)}
            className={like ? "like" : null}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductC;
