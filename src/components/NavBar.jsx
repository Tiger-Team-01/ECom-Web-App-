import "../style/navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { GetProductDetails } from "../actions";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function NavBar({ setDrawer }) {
	const searchItems = [];
	const [search, setsearch] = useState(false);
	const [clicked, setClicked] = useState(false);
	const [sResults, setsResults] = useState("");
	const [down, setDown] = useState(false);
	const products = useSelector((state) => state.Product);
	const CartItems = useSelector((state) => state.CartItems);
	const dispatch = useDispatch();

	const handleClick = () => {
		setClicked(!clicked);
	};

	useEffect(() => {
		document.body.addEventListener("click", () => {
			setsearch(false);
			setDown(false);
		});
		document.body.addEventListener("mouseover", () => {
			setDown(false);
		});
	}, []);

	return (
		<>
			<div className='navbar-items'>
				{products.length > 0
					? products.forEach((item) => searchItems.push(item.fields.title))
					: null}
				<div
					style={{ zIndex: 5 }}
					className={
						search
							? "resultBox position-fixed p-1 d-flex flex-column "
							: "resultBox position-fixed p-1  d-flex flex-column hide"
					}
				>
					<input
						type='text'
						placeholder='Search '
						className='p-1 border border-0 text-white'
						onClick={(e) => {
							setsearch(true);
							e.stopPropagation();
						}}
						onChange={(e) => {
							searchItems.forEach((Sitems) => {
								if (
									Sitems.toLowerCase().includes(
										e.target.value.toLowerCase(),
									)
								) {
									setsResults([Sitems]);
								}
								if (e.target.value === "") {
									setsResults(null);
								}
							});
						}}
					></input>
					<div
						className='card text-left p-3 overflow-hidden searchcard'
						id='result'
						onClick={() => {
							if (products.length > 0) {
								products.forEach((ele) => {
									// eslint-disable-next-line
									if (ele.fields.title == sResults) {
										localStorage.removeItem("ProductDetails");
										dispatch(GetProductDetails(ele.id));
										setsearch(false);
									}
								});
							}
						}}
					>
						<Link
							to='/details'
							className='text-white text-decoration-none'
						>
							{sResults ? <>{sResults}</> : <h6>----</h6>}
						</Link>
					</div>
				</div>
				<NavLink to='/' style={{ textDecoration: "none" }}>
					<div className='navbar-logo'>
						<h1>E</h1>
						<span>Shop</span>
					</div>
				</NavLink>
				<div className='menu-items' onClick={handleClick}>
					{clicked ? <IoCloseSharp /> : <GiHamburgerMenu />}
				</div>
				<ul className={clicked ? "nav-menu activate" : "nav-menu"}>
					<li>
						<NavLink className='nav-links' to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<div className='nav-links'>
							<a href='#topcategory' style={{ color: "inherit" }}>
								Shop
							</a>
						</div>
					</li>
					<li>
						<div className='nav-links'>About</div>
					</li>
					<li
						onMouseOver={(e) => {
							setDown(true);
							e.stopPropagation();
						}}
						onTouchStart={(e) => {
							setDown(true);
							e.stopPropagation();
						}}
					>
						<div className='nav-links drop-down'>
							Categories
							<ul
								className={down ? "dropdown active" : "dropdown "}
								onMouseOver={(e) => {
									setDown(true);
									e.stopPropagation();
								}}
								onTouchStart={(e) => {
									setDown(true);
									e.stopPropagation();
								}}
							>
								<li>
									<a href='#Fashion'>Men</a>
								</li>
								<li>
									<a href='#Kids'>Kids</a>
								</li>
								<li>
									<a href='#Appliances'>Appliances</a>
								</li>
								<li>
									<a href='#Electronics'>Electronics</a>
								</li>
								<li>
									<a href='#Mobile'>Mobiles</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<div className='end'>
					<div
						className='search'
						onClick={(e) => {
							setsearch(!search);
							e.stopPropagation();
						}}
					>
						{search ? <IoCloseSharp /> : <FiSearch />}
					</div>

					<button
						className='cartbutton'
						onClick={() => {
							setDrawer(true);
						}}
					>
						<div className='carticon'>
							<HiShoppingCart />
						</div>
						<span>CART</span>
						<span>{CartItems.length}</span>
					</button>
				</div>
			</div>
		</>
	);
}

export default NavBar;
