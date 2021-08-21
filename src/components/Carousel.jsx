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
						src='https://previews.123rf.com/images/ylivdesign/ylivdesign1705/ylivdesign170502813/78258025-online-shopping-banner-horizontal-cartoon-style.jpg'
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
						src='https://cdn.wallpapersafari.com/72/75/TRPyf5.jpg'
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
						src='https://discoverwichitafalls.com/wp-content/uploads/2020/08/Petco-3-1300x650.jpg'
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
