import React from "react";
import { BiSupport } from "react-icons/bi";
import { RiTruckLine } from "react-icons/ri";
import { IoWallet } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";

import "../style/footer.css";

const Footer = () => {
	return (
		<>
			<div className='foot text-white d-flex  justify-content-center p-3'>
				<div className='main d-flex flex-column align-items-center justify-content-center'>
					<div>
						<div className=' logo logotext p-2'>
							<span style={{color:"#eb8282"}}>
								<BiSupport />
							</span>
							<h5>24X7 SUPPORT</h5>
						</div>
						<div className='logo logotext2 p-2'>
							<span style={{color:"#eb8282"}}>
								<RiTruckLine />
							</span>
							<h5>FREE DELIVERY</h5>
						</div>
						<div className='logo logotext3 p-2'>
							<span style={{color:"#eb8282"}}>
								<IoWallet />
							</span>
							<h5>MONEY BACK</h5>
						</div>
					</div>
				</div>

				<div className='mid'>
					<div className='navbar-logo text-center fs-4'>
						<h1 className='mt-2'>E</h1>
						<span className='mt-2'>Shop</span>
					</div>
					<div className='ott col mt-3 d-flex justify-content-around'>
						<div className='one'>
							<h3>Your Account</h3>

							<li>Personal Info </li>
							<li>Orders </li>
							<li>Credit Slips</li>
							<li>Addresses</li>
						</div>
						<div className='two'>
							<h3>Product</h3>
							<p>
								Delivery <br />
								Legel Notice <br />
								Prices drop <br />
								New Products
							</p>
						</div>
						<div className='three'>
							<h3>Store Info</h3>
							<p>
								<span className='fs-5 p-2'>
									<MdLocationOn />
								</span>
								1573 Business Point, India <br />
								<span className='fs-5 p-2'>
									<IoCall />
								</span>
								+91-95846847841 <br />
								<span className='fs-5 p-2'>
									<MdEmail />
								</span>
								eshop@gmail.com
							</p>
						</div>
					</div>
				</div>
			</div>

			<div
				className='bottom d-flex align-items-center text-black h-5 p-2 ps-5'
				style={{ backgroundColor: "#c4c4c4" }}
			>
				<h6>
					&copy; 2021,Theme Powered by Tiger Team <sup>1234</sup>
				</h6>
			</div>
		</>
	);
};

export default Footer;
