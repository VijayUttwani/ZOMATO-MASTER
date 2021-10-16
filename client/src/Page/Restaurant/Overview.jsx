import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-star-rating-component";

// components
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";
import MenuCollection from "../../Components/Restaurant/MenuCollection";

const Overview = () => {
	const { id } = useParams();

	const settings = {
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	const ratingChanged = (newRating) => {
		console.log(newRating);
	};
	return (
		<>
			<div className="flex flex-col md:flex-row relative">
				<div className="w-full md:w-8/12">
					<h2 className="font-semibold text-lg md:text-xl my-4">
						About this place
					</h2>
					<div className="flex justify-between items-center">
						<h4 className="text-lg font-medium">Menu</h4>
						<Link to={`/restaurant/${id}/menu`}>
							<span className="flex items-center gap-1 text-zomato-400">
								See all menu <IoMdArrowDropright />
							</span>
						</Link>
					</div>
					<div className="flex flex-wrap gap-3 my-4">
						<MenuCollection
							menuTitle="Menu"
							pages="3"
							image="https://b.zmtcdn.com/data/menus/990/18624990/b74767621cec641a675743c9c278fb9f.jpg?fit=around%7C200%3A200"
						/>
					</div>
					<h4 className="text-lg font-medium my-4">Cuisines</h4>
					<div className="flex flex-wrap gap-2">
						<span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
							Street Food
						</span>
						<span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
							Street Food
						</span>
						<span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
							Street Food
						</span>
					</div>
					<div className="my-4">
						<h4 className="text-lg font-medium">Average Cost</h4>
						<h6>₹100 for one order (approx.)</h6>
						<small className="text-gray-500">
							Exclusive of applicable taxes and charges, if any
						</small>
					</div>
				</div>
				<aside
					style={{ height: "fit-content" }}
					className="hidden md:block md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md"
				>
					<div>
						<h4 className="text-xl font-medium">Call</h4>
						<h5 className="text-zomato-400 font-medium">+918047192229</h5>
					</div>
				</aside>
			</div>
		</>
	);
};

export default Overview;
