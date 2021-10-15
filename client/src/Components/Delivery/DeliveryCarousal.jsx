import React from "react";
import Slider from "react-slick";

// components
import DeliveryCatagory from "./DeliveryCatagory";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const DeliveryCarousal = () => {
	const categories = [
		{
			image:
				"https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
			title: "biryani",
		},
		{
			image:
				"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
			title: "Momos",
		},
		{
			image:
				"https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
			title: "Chicken",
		},
		{
			image:
				"https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
			title: "Burger",
		},
		{
			image:
				"https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
			title: "Chaat",
		},
		{
			image:
				"https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
			title: "Cake",
		},
		{
			image:
				"https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
			title: "Rolls",
		},
	];
	const settings = {
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<>
			<h1 className="text-xl mb-4 font-semibold">
				Inspiration for your first order
			</h1>
			<div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
				{categories.map((food) => (
					<DeliveryCatagory {...food} />
				))}
			</div>

			<div className="hidden lg:block">
				<Slider {...settings}>
					{categories.map((food) => (
						<DeliveryCatagory {...food} />
					))}
				</Slider>
			</div>
		</>
	);
};

export default DeliveryCarousal;
