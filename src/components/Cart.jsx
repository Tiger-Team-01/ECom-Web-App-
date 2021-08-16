import React from "react";
import { useSelector } from "react-redux";
function Cart({ drawer, setdrawer }) {
  const CartItems = useSelector((state) => state.CartItems);
  return (
    <div
      className={
        drawer
          ? "container drawer bg-danger position-absolute d-flex flex-column py-5"
          : "container drawer bg-danger position-absolute d-none py-5"
      }
    >
      <div
        className="close"
        onClick={() => {
          setdrawer(false);
        }}
      >
        X
      </div>
      {CartItems.length > 0 ? (
        CartItems.map((item, index) => (
          <div key={index} style={{height:"8rem"}} className="p-3 m-3 bg-light d-flex flex-row">
              <img src={item.image} style={{width:"5rem",height:"5rem"}} alt=""/>
              <div className="px-3 d-flex flex-column">
                <h5>{item.title}</h5>
                <p>₹{item.price*70}</p>
                
              </div>
            
          </div>
        ))
      ) : (
        <h1> No item Added</h1>
      )}
    </div>
  );
}

export default Cart;
