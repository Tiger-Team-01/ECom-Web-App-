import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { AddtoCart, RemovefromCart } from "../actions";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../style/cart.css";
import { useEffect } from "react";

function Cart({ drawer, setdrawer }) {
  const CartItems = useSelector((state) => state.CartItems);
  const dispatch = useDispatch();
  var local = JSON.parse(localStorage.getItem("CartItems"));
  useEffect(() => {
    if (local) {
      local.forEach((ele) => {
        dispatch(AddtoCart(ele.item, ele.qty));
      });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Modal show={drawer} fullscreen={true} onHide={() => setdrawer(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="ModalBodyCart"
        style={{
          backgroundImage: `url("https://cdn.discordapp.com/attachments/848326014547394590/878765267566612510/unknown.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <>
          {CartItems.length > 0 ? (
            <>
              {localStorage.setItem("CartItems",JSON.stringify(CartItems))}
              <div className="abcde d-flex flex-column fw-bold mt-4 m-auto border-end-4">
                <div className="head bg-light d-flex h-100">
                  <div className=" d-flex align-items-center ps-5 col-5 ">
                    Product Name
                  </div>
                  <div className=" d-flex justify-content-center align-items-center col-2 ">
                    Quantity
                  </div>
                  <div className=" d-flex justify-content-center align-items-center col-2 ">
                    Price
                  </div>
                  <div className=" d-flex justify-content-center align-items-center col-2 ">
                    Sub Total
                  </div>
                </div>
              </div>

              {CartItems.map((item, index) => (
                <div
                  key={index}
                  className="abcde cartItemProduct d-flex flex-column m-auto border-bottom-4 mt-1"
                  style={{ height: "7rem" }}
                >
                  <div className="det  d-flex h-100">
                    <div className=" d-flex align-items-center col-5 fw-bold ">
                      <div
                        className="bg-white ProductImgCart"
                        style={{
                          width: "35%",
                          height: "100%",
                          padding: "15px",
                        }}
                      >
                        <img
                          src={
                            item.item.Images ? item.item.Images[0].url : null
                          }
                          style={{ width: "100%", height: "100%" }}
                          alt=""
                        />
                      </div>
                      <div className="ProductTitleCart">{item.item.title}</div>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center col-2 ">
                      {" "}
                      {item.qty}{" "}
                    </div>
                    <div className=" d-flex justify-content-center align-items-center col-2 ">
                      ₹ {item.item.price}{" "}
                    </div>
                    <div className=" d-flex justify-content-center align-items-center col-2   ">
                      {" "}
                      ₹ {item.item.price * item.qty}
                    </div>
                    <div className="  d-flex justify-content-center align-items-center col-1  ">
                      <div
                        style={{ cursor: "pointer" }}
                        className="text-danger"
                        onClick={() => {
                          localStorage.removeItem("CartItems");
                          dispatch(RemovefromCart(index));
                        }}
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <h1 className=" text-center"> No item Added</h1>
          )}
        </>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#04041B" }}>
        {CartItems.length > 0 ? (
          <Link to="/payment">
            <Button
              variant="contained"
              color="primary"
              onClick={() => setdrawer(false)}
            >
              Checkout {CartItems.length} items
            </Button>
          </Link>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert("No item in Cart")}
          >
            Checkout {CartItems.length} items
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
