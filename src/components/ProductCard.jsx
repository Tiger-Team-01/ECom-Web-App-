import RatingStar from "./RatingStar";
import "../style/productcard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetProductDetails } from "../actions";
const ProductCard = ({ prod }) => {
	const dispatch = useDispatch();
	
	return (
		<Link
			to={"/details/" + prod.id}
			className='Pcard'
			onClick={() => {
				localStorage.removeItem("ProductDetails")
				dispatch(GetProductDetails(prod.id));
			}}
		>
			<div className='product-card'>
				<div style={{ height: "275px" }}>
					<img src={prod.fields.Images[0].url} alt='' />
				</div>

				<div className='content'>
					<h2 className='title'>{prod.fields.title}</h2>
					<div className='price'>
						<h3>₹ {prod.fields.price}</h3>
						<div>₹ {prod.fields.price * parseInt(2)}</div>
					</div>
					<RatingStar />
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
