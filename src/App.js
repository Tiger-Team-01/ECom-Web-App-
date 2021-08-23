import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Payments from "./components/Payments";
import { Route } from "react-router-dom";
import { GetProduct } from "./actions";
import Carousell from "./components/Carousel";
import TopCategories from "./components/TopCategories";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import Overlay from "./components/Overlay";
import ReactLoading from "react-loading";

function App() {
	const CartItems = useSelector((state) => state.CartItems);
	const Products = useSelector((state) => state.Product);
	const [drawer, setdrawer] = useState(false);

	const dispatch = useDispatch();
	useEffect(
		() =>dispatch(GetProduct())
		// eslint-disable-next-line
	, []);

	return (
		<div className='App'>
			<NavBar setDrawer={setdrawer} />
			<Cart drawer={drawer} setdrawer={setdrawer} />
			<Route path='/' exact>
				{Products.length > 0 ? (
					<>
						<Carousell />
						<TopCategories />
						<Overlay />
						<ProductSection products={Products} />
					</>
				) : (
					<div
						className='d-flex justify-content-center align-items-center'
						style={{ height: "100vh" }}
					>
						<ReactLoading
							type='spokes'
							color='#000'
							height={"100px"}
							width={"100px"}
						/>
					</div>
				)}
			</Route>

			<Route path='/details'>
				<ProductDetails setDrawer={setdrawer} />
			</Route>
			<Route path='/payment' exact>
				<Payments cartItems={CartItems} />
			</Route>
			<Footer />
		</div>
	);
}

export default App;
