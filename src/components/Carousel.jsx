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
						src='https://cdn.discordapp.com/attachments/866389808376184843/879437128541556747/unknown.png'
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
						src='https://cdn.discordapp.com/attachments/866389808376184843/879437561389527090/unknown.png'
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
