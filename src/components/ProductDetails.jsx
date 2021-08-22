import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { AddtoCart } from "../actions";
import { Link } from "react-router-dom";
import { RemovefromCart } from "../actions";
import RatingStar from "./RatingStar";
import "../style/productDetails.css";

function ProductDetails({ setDrawer }) {
	const item = useSelector((state) => state.Details);
	const CartItems = useSelector((state) => state.CartItems);
	const [qty, setqty] = useState(1);
	let Add = 0;
	const dispatch = useDispatch();

	return (
		<div className='container d-flex mt-5'>
			<Link to='/'>
				<button className='back bg-transparent border border-0'>
					<img
						src='https://image.flaticon.com/icons/png/512/93/93634.png'
						alt=''
					/>
				</button>
			</Link>
			<div className='col-6 d-flex imageContainer'>
				<div className='prodimage d-flex  justify-content-center '>
					<img src={item.Images ? item.Images[0].url : null} alt='' />
				</div>
				{console.log(CartItems)}
			</div>
			<div className=' col-6  d-flex flex-column'>
				<div className='title p-2 detail d-flex justify-content-center align-items-center overflow-hidden'>
					<h1 className='text-capitalize'> {item.title}</h1>
				</div>
				<div className=' p-2 detail2 d-flex flex-column '>
					<div className='qty'>
						Quantity :
						<input
							className='qty p-2 my-3'
							id='qty'
							style={{ width: "4rem", height: "2rem" }}
							placeholder='1'
							value={qty}
							type='number'
							min={1}
							max={9}
							onChange={(e) => {
								setqty(e.target.value);
							}}
						/>
					</div>
					<div className='pr'>Price : ₹{item.price}</div>
					<div className='buy'>
						<Button
							variant='dark'
							onClick={() => {
								console.log("clicked");
								if (CartItems.length > 0) {
									CartItems.forEach((element, index) => {
										// eslint-disable-next-line
										if (
											element.item.id == item.id &&
											element.qty == qty
										) {
											Add = 1;
											setDrawer(true);
										}
										// eslint-disable-next-line
										if (element.qty != qty) {
											dispatch(RemovefromCart(index));
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
