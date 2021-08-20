import RatingStar from "./RatingStar";
import "../style/productcard.css";

const ProductCard = ({prod}) => {
	return (
		<div className='Pcard'>
			<div className='product-card'>
				<img
					src={prod.Images[0].url}
					alt=''
				/>

				<div className='content'>
					<h2 className='title'>{prod.title}</h2>
					<div className='price'>
						<h3>Rs.{prod.price}</h3>
						<div>Rs.{prod.price*parseInt(2)}</div>
					</div>
					<RatingStar />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
