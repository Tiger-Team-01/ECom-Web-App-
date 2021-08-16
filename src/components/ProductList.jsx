import React from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { GetProductDetails } from "../actions";

function ProductList() {
  const products = useSelector((state) => state.Product)
const dispatch = useDispatch();
  return (
    <div className="List">
      {products.map((item, index) => (
        <Link key={index}
          to={"/" + parseInt(index+1)}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div
            className="card text-left border border-2 p-3 m-2 overflow-hidden item"
            style={{ width: "24rem", height: "30rem" }}
            key={index} onClick={()=>{
              dispatch(GetProductDetails(parseInt(index+1)))
            }}
          >
            <img
              style={{ width: "22rem", height: "15rem" }}
              className="card-img-top"
              src={item.image}
              alt=""
            />
            <div
              className="card-body"
              style={{ width: "22rem", height: "10rem" }}
            >
              <h4 className="card-title">{item.title}</h4>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
