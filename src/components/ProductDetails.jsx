import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { AddtoCart } from "../actions";

function ProductDetails({ setDrawer }) {
  const item = useSelector((state) => state.Details);
  const [val, setval] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="container d-flex justify-content-center">
      <div
        className="card border border-2 p-3 m-2 overflow-hidden item"
        style={{ width: "25rem", height: "stretch" }}
      >
        <img
          style={{ width: "22rem", height: "15rem" }}
          className="card-img-top"
          src={item.image}
          alt=""
        />
        <div className="card-body" style={{ width: "22rem", height: "30rem" }}>
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text">{item.description}</p>
          <h3>Price: ₹{item.price * 70}</h3>
          <br />

          <input
            className="qty p-2 my-3"
            id="qty"
            style={{ width: "4rem", height: "2rem" }}
            placeholder="1"
            value={val}
            type="number"
            min={1}
            max={9}
            onChange={(e) => {
              setval(e.target.value);
            }}
          ></input>

          <br />
          <Button
            variant="dark"
            onClick={() => {
              dispatch(AddtoCart(item));

              setDrawer(true);
            }}
          >
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
