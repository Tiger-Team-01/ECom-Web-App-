import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { AddtoCart, GetProductDetails } from "../actions";
import { Link } from "react-router-dom";
import { RemovefromCart } from "../actions";
import RatingStar from "./RatingStar";
import "../style/productDetails.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";

function ProductDetails({ setDrawer }) {
	const item = useSelector((state) => state.Details);
	const CartItems = useSelector((state) => state.CartItems);
	const [qty, setqty] = useState(1);
	let Add = 0;
	const dispatch = useDispatch();
	var ProductDetailsLocal = JSON.parse(localStorage.getItem("ProductDetails"));
	useEffect(() => {
		if (ProductDetailsLocal) {
			dispatch(GetProductDetails(ProductDetailsLocal.id));
		}
		// eslint-disable-next-line
	}, []);

	const handleIncrement = () => {
		if (qty >= 1 && qty < 10) {
			setqty(qty + 1);
		}
	};
	const handleDecrement = () => {
		if (qty > 1) {
			setqty(qty - 1);
		}
	};
	return (
		<div
			className='container prodDetailsPage d-flex mt-5 mb-5'
			style={{ height: "80vh" }}
		>
			<Link to='/'>
				<button className='back bg-transparent border border-0'>
					<IoArrowBackCircleOutline />
				</button>
			</Link>
			<div className='col-6 d-flex imageContainer '>
				<div className='prodimage d-flex justify-content-center align-items-center'>
					<img src={item.Images ? item.Images[0].url : null} alt='' />
				</div>
			</div>
			<div className=' col-6  d-flex flex-column prodDetailsDescription'>
				<div className='title p-2 detail d-flex  align-items-center overflow-hidden'>
					<h4 className='text-capitalize fw-bold'> {item.title}</h4>
				</div>
				<div className=' p-2 detail2 d-flex flex-column '>
					<div className='qty'>
						Quantity :
						<div className='inputNumber'>
							<div className='decrement' onClick={handleDecrement}>
								<FaMinus />
							</div>
							<div className='countValue'>{qty}</div>
							<div className='increment' onClick={handleIncrement}>
								<FaPlus />
							</div>
						</div>
					</div>
					<div className='pr'>Price : ₹{item.price}</div>
					<div className='buy'>
						<Button
							variant='dark'
							onClick={() => {
								if (CartItems.length > 0) {
									CartItems.forEach((element, index) => {
										// eslint-disable-next-line
										if (element.item.id == item.id && element.qty == qty) {
											Add = 1;
											setDrawer(true);
										}
										// eslint-disable-next-line
										if ( element.qty != qty && element.item.id == item.id) {
											Add = 1;
											dispatch(RemovefromCart(index));
											dispatch(AddtoCart(item, qty));
										}
									});
								}
								// eslint-disable-next-line
								if (Add == 0) {
									dispatch(AddtoCart(item, qty));
								}
								setDrawer(true);
							}}
						>
							Buy now
						</Button>
					</div>
				</div>
				<div className='review p-2 detail3 d-flex flex-column '>
					<h5>Rate the product :</h5>
					<RatingStar />
					<h5>Reviews :</h5>
					<textarea
						placeholder='Write your Review Here'
						className='p-2'
					></textarea>
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
