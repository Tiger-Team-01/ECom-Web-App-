import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { RemovefromCart } from "../actions";
import { useState } from "react";
import { ClearCart } from "../actions";
function Payments({ cartItems }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  // const [amount, setamount] = React.useState(0)

  // useEffect(() => {

  //     cartItems.forEach(item =>
  //         setamount(amount+(item.price*70))
  //         );
  //         console.log(amount);
  // }, [])

  return (
    <>
      <div className=" container d-flex flex-column align-items-center payment p-3">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div
              key={index}
              style={{ width: "50rem", height: "8rem" }}
              className="p-3 m-3 bg-info d-flex flex-row position-relative"
            >
              <img
                src={item.image}
                style={{ width: "5rem", height: "5rem" }}
                alt=""
              />
              <div className="px-3 d-flex flex-column">
                <h5>{item.title}</h5>
                <p>₹{item.price * 70}</p>
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
        {/* <p className="text-white">Amount {amount}₹</p> */}
        <Button
          onClick={() => {
            setShow(true);
          }}
        >
          Complete Payment
        </Button>
        <Modal
          show={show}
          fullscreen={"md-down"}
          onHide={() => {
            setShow(false);
            dispatch(ClearCart());
          }}
        >
          <Modal.Header style={{ backgroundColor: "gray" }} closeButton>
            <Modal.Title>Congrats</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Payement Successfull
            <img
              style={{ display: "inline-block", width: "5rem", height: "5rem" }}
              src="https://thumbs.dreamstime.com/b/green-check-mark-icon-design-vector-badge-warranty-accept-quality-approved-yes-done-162645945.jpg"
              alt=""
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Payments;
