import React from "react";
import ProductCard from "./ProductCard";
import "../style/productsection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const breakouts = {
	300: {
		width: 270,
		slidesPerView: 1,
		spaceBetween: 15,
	},
	500: {
		width: 525,
		slidesPerView: 2,
		spaceBetween: 15,
	},
	850: {
		width: 780,
		slidesPerView: 3,
		spaceBetween: 15,
	},
	1100: {
		width: 1050,
		slidesPerView: 4,
		spaceBetween: 15,
	},
	1110: {
		width: 1290,
		slidesPerView: 5,
		spaceBetween: 15,
	},
};

const ProductSection = ({ products }) => {
	const Fashion = [],
		Electronics = [],
		Appliances = [],
		kids = [],
		Mobile = [];
	return (
		<>
			<div className='product-section' id='Fashion'>
				<span>Products</span>
				<div className='product-tab'>
					<div className='nav'>
						<span>M</span>
						<span>Men's Products</span>
					</div>

					<Swiper
						breakpoints={breakouts}
						pagination={{
							type: "progressbar",
						}}
						navigation={true}
						spaceBetween={0}
						slidesPerView={1}
						slidesPerColumn={1}
					>
						{products.forEach((element) => {
							// eslint-disable-next-line
							if (element.fields.Categories == "Fashion")
								Fashion.push(element);
						})}
						{Fashion.length > 0
							? Fashion.map((prod, idx) => (
									<SwiperSlide key={idx}>
										<ProductCard prod={prod} />
									</SwiperSlide>
							  ))
							: null}
					</Swiper>
				</div>
			</div>
			<div className='product-section' id='Electronics'>
				<div className='product-tab'>
					<div className='nav'>
						<span>E</span>
						<span>Electronics Products</span>
					</div>

					<Swiper
						breakpoints={breakouts}
						navigation={true}
						spaceBetween={0}
						slidesPerView={1}
						slidesPerColumn={1}
						pagination={{
							type: "progressbar",
						}}
					>
						{products.forEach((element) => {
							// eslint-disable-next-line
							if (element.fields.Categories == "Electronics")
								Electronics.push(element);
						})}
						{Electronics.length > 0
							? Electronics.map((prod, idx) => (
									<SwiperSlide key={idx}>
										<ProductCard prod={prod} />
									</SwiperSlide>
							  ))
							: null}
					</Swiper>
				</div>
			</div>
			<div className='product-section' id='Kids'>
				<div className='product-tab'>
					<div className='nav'>
						<span>K</span>
						<span>Kid's Products</span>
					</div>

					<Swiper
						breakpoints={breakouts}
						navigation={true}
						spaceBetween={0}
						slidesPerView={1}
						slidesPerColumn={1}
						pagination={{
							type: "progressbar",
						}}
					>
						{products.forEach((element) => {
							// eslint-disable-next-line
							if (element.fields.Categories == "Kids")
								kids.push(element);
						})}
						{kids.length > 0
							? kids.map((prod, idx) => (
									<SwiperSlide key={idx}>
										<ProductCard prod={prod} />
									</SwiperSlide>
							  ))
							: null}
					</Swiper>
				</div>
			</div>
			<div className='product-section' id='Appliances'>
				<div className='product-tab'>
					<div className='nav'>
						<span>A</span>
						<span>Appliances</span>
					</div>

					<Swiper
						breakpoints={breakouts}
						navigation={true}
						spaceBetween={0}
						slidesPerView={1}
						slidesPerColumn={1}
						pagination={{
							type: "progressbar",
						}}
					>
						{products.forEach((element) => {
							// eslint-disable-next-line
							if (element.fields.Categories == "Appliances")
								Appliances.push(element);
						})}
						{Appliances.length > 0
							? Appliances.map((prod, idx) => (
									<SwiperSlide key={idx}>
										<ProductCard prod={prod} />
									</SwiperSlide>
							  ))
							: null}
					</Swiper>
				</div>
			</div>

			<div className='product-section' id='Mobile'>
				<div className='product-tab'>
					<div className='nav'>
						<span>M</span>
						<span>Mobiles</span>
					</div>

					<Swiper
						breakpoints={breakouts}
						navigation={true}
						spaceBetween={0}
						slidesPerView={1}
						slidesPerColumn={1}
						pagination={{
							type: "progressbar",
						}}
					>
						{products.forEach((element) => {
							// eslint-disable-next-line
							if (element.fields.Categories == "Mobile")
								Mobile.push(element);
						})}
						{Mobile.length > 0
							? Mobile.map((prod, idx) => (
									<SwiperSlide key={idx}>
										<ProductCard prod={prod} />
									</SwiperSlide>
							  ))
							: null}
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default ProductSection;
