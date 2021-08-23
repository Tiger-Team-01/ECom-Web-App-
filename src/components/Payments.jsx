import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { RemovefromCart } from "../actions";
import { useState,useEffect } from "react";
import { ClearCart } from "../actions";
import '../style/payment.css'
function Payments({ cartItems }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [netPrice, setnetPrice] = useState(0)
  let z=0;
  useEffect(() => {
    if(cartItems.length>0){
      cartItems.forEach(element => {
        // eslint-disable-next-line
        z=z+(element.item.price*parseInt(element.qty))
       setnetPrice(z)
      });
    }
  }, [cartItems])
  return (
    <>
      <div className=" d-flex flex-column align-items-center p-1" style={{minHeight:"100vh"}}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div
              key={index}
              style={{ width: "60%", height: "8rem" }}
              className="p-3 m-3 d-flex flex-row position-relative paymentPage"
            >
              <img
                src={item.item.Images? item.item.Images[0].url:null}
                style={{ width: "5rem", height: "5rem" }}
                alt=""
              />
              <div className="px-3 d-flex flex-column">
                <h5 className="fw-bold">{item.item.title}</h5>
               <em><p>₹{item.item.price*parseInt(item.qty)}</p></em>
              </div>

              <button
                className="p-3 position-absolute bg-transparent border border-0 top-0 end-0"
                onClick={() => dispatch(RemovefromCart(index))}
              >
                x
              </button>
            </div>
          ))
        ) : (
          <Redirect to="/"></Redirect>
        )}
        <div className="d-flex flex-column p-3 text-center FinalPaymentButton mt-5">
          <h4 className="fw-bold" style={{height:"2rem"}}>Total Price: ₹ {netPrice}</h4> 
          <p>{netPrice>1000?"Wohoo!! Your items are Eligible for free delivery" :" Sorry! Your items are not Eligible for free delivery"}</p>
        <Button className="m-2"
          onClick={() => {
            setShow(true);
          }}
        >
          Complete Payment
        </Button>
        </div>
        <Modal
          show={show}
          fullscreen={"md-down"}
          onHide={() => {
            setShow(false);
            localStorage.clear();
            dispatch(ClearCart());
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold">Congrats!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center text-success d-flex justify-content-around align-items-center">
            <img
              style={{ display: "inline-block", width: "5rem", height: "5rem" }}
              src="https://thumbs.dreamstime.com/b/green-check-mark-icon-design-vector-badge-warranty-accept-quality-approved-yes-done-162645945.jpg"
              alt=""
              />
              Payement Successfull
              <img
              style={{ display: "inline-block", width: "5rem", height: "5rem" }}
              src=" https://c.tenor.com/wyM-4wb4XUQAAAAM/winni-the-pooh-congrats.gif"
              alt=""
              /> 
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Payments;
