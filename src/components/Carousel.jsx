import { Carousel } from "react-bootstrap";

const img = {
	textAlign: "center",
};
const Carousell = () => {
	return (
		<>
			<Carousel variant='dark' style={{ zIndex: "0" }}>
				<Carousel.Item interval={1000}>
					<img
						style={img}
						className='d-block w-100 '
						src='https://cdn.shopify.com/s/files/1/1364/7933/files/slide9_1170x530.jpg?v=1521558770'
						alt='First slide'
					/>
					<Carousel.Caption>
						{/* <h3></h3>
						<p></p> */}
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
						className='d-block w-100'
						src='https://cdn.shopify.com/s/files/1/1364/7933/files/slide9_1170x530.jpg?v=1521558770'
						alt='Second slide'
					/>
					<Carousel.Caption>
						{/* <h3></h3>
						<p></p> */}
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://cdn.shopify.com/s/files/1/1364/7933/files/slide9_1170x530.jpg?v=1521558770'
						alt='Third slide'
					/>
					<Carousel.Caption>
						{/* <h3></h3>
						<p></p> */}
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Carousell;
