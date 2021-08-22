import "../style/topcategory.css";
import { Card, CardGroup, Image } from "react-bootstrap";

const card = {
	width: "21rem",
	margin: "10px 15px",
	boxShadow: "0 0 0 1px #EBEBEB",
	border: "none",
	borderRadius: "2px",
	backgroundColor: "#f8f8f8",
};
const bb = {
	boxShadow: "0 0 0 1px #EBEBEB",
};
const bt = {
	borderTop: "0.5px solid #EBEBEB",
};

const TopCategories = () => {
	return (
		<>
			<div className='top-category'>
				<span>Top Categories</span>

				<CardGroup>
					<a href='#Fashion'>
						<Card style={card}>
							<Card.Img
								className='scale'
								variant='top'
								// src='https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=228&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzaGlvbixzaGlydHx8fHx8fDE2Mjk0NzM4NjY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=381'
								src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
							/>

							<div className='d-flex flex-row p-0 ' style={bb}>
								<div>
									<Image
										src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzaGlvbixzaGlydHx8fHx8fDE2Mjk0NzMzNjQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
										thumbnail
										className='Responsive-img'
									/>
								</div>
								<div>
									<Image
										src='https://images.unsplash.com/photo-1553545985-1e0d8781d5db?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzaGlvbixqZWFuc3x8fHx8fDE2Mjk0NzMzMjY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
										thumbnail
										className='Responsive-img'
									/>
								</div>
								<div>
									<Image
										src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFzaGlvbixzaGlydHx8fHx8fDE2Mjk0NzMzNjQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
										thumbnail
										className='Responsive-img'
									/>
								</div>
							</div>
							<div className='pt-2 pb-2 text-center' style={bt}>
								<Card.Title className='m-0 fw-bold'>Fashion</Card.Title>
							</div>
						</Card>
					</a>
					<a href='#Electronics'>
						<Card style={card}>
							<Card.Img
								className='scale'
								variant='top'
								src='https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'
							/>

							<div className='d-flex flex-row p-0 ' style={bb}>
								<div>
									<Image
										src='https://images.unsplash.com/photo-1596558450268-9c27524ba856?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9iaWxlfHx8fHx8MTYyOTQ3NDc3Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
										thumbnail
										className='Responsive-img'
									/>
								</div>
								<div>
									<Image
										src='https://images.unsplash.com/photo-1628832307345-7404b47f1751?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8RWxlY3Ryb25pY3MsbGFwdG9wfHx8fHx8MTYyOTQ3NDY4Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
										thumbnail
										className='Responsive-img'
									/>
								</div>
								<div>
									<Image
										src='https://images.unsplash.com/photo-1629363447921-d0930440a5b3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cGN8fHx8fHwxNjI5NDc0ODU5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
										thumbnail
										className='Responsive-img'
									/>
								</div>
							</div>

							<div className='pt-2 pb-2 text-center' style={bt}>
								<Card.Title className='m-0 fw-bold'>
									Electronics
								</Card.Title>
							</div>
						</Card>
					</a>
					<a href='#Appliances'>
						<Card style={card}>
							<Card.Img
								className='scale'
								variant='top'
								src='https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2017/01/appliances.jpg?fit=600%2C360&ssl=1'
							/>

							<div className='d-flex flex-row p-0 ' style={bb}>
								<div>
									<Image
										src='https://images.unsplash.com/photo-1552975084-6e027cd345c2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVsZXZpc2lvbnx8fHx8fDE2Mjk0NzUwMDc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
										thumbnail
										className='Responsive-img'
									/>
								</div>
								<div>
									<Image
										src='https://images.unsplash.com/photo-1570777758852-62d94955956a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwbGlhbmNlc3x8fHx8fDE2Mjk0NzUxNzc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
										thumbnail
										className='Responsive-img'
									/>
								</div>
								<div>
									<Image
										src='https://images.unsplash.com/photo-1596552183299-000ef779e88d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwbGlhbmNlcyxmcmlkZ2V8fHx8fHwxNjI5NDc1MjQz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
										thumbnail
										className='Responsive-img'
									/>
								</div>
							</div>

							<div className='pt-2 pb-2 text-center' style={bt}>
								<Card.Title className='m-0 fw-bold'>
									Appliances
								</Card.Title>
							</div>
						</Card>
					</a>
				</CardGroup>
			</div>
		</>
	);
};

export default TopCategories;
