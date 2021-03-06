import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import Slider from "react-slick";
import ReactStars from "react-star-rating-component";

// components
import MenuCollection from "../../Components/Restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../Components/Restaurant/MenuSimilarRestaurantCard";
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";
import ReviewCard from "../../Components/Restaurant/Reviews/ReviewCard";
import { IoPhonePortrait } from "react-icons/io5";

const Overview = () => {
	const { id } = useParams();

	const settings = {
		arrows: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
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
							image={[
								"https://b.zmtcdn.com/data/menus/990/18624990/b74767621cec641a675743c9c278fb9f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
							]}
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
						<h6>???100 for one order (approx.)</h6>
						<small className="text-gray-500">
							Exclusive of applicable taxes and charges, if any
						</small>
					</div>
					<div className="my-4">
						<h4 className="text-lg font-medium">Similar Restaurants</h4>
						<div>
							<Slider {...settings}>
								<MenuSimilarRestaurantcard
									image="https://b.zmtcdn.com/data/pictures/chains/7/1400017/18e93a7161f8b9e614b7bd76b362118c_featured_v2.jpg"
									title="Baskin Robbins"
								/>
								<MenuSimilarRestaurantcard
									image="https://b.zmtcdn.com/data/pictures/chains/3/1400453/82505e8efe78d78cb603c71b476a09e4_featured_v2.jpg?output-format=webp"
									title="Dev's Bakery"
								/>
								<MenuSimilarRestaurantcard
									image="https://b.zmtcdn.com/data/pictures/chains/6/19008486/6a597ff9eddf138b2e36b8df383716dc_featured_v2.jpg?output-format=webp"
									title="99 Pancakes"
								/>
								<MenuSimilarRestaurantcard
									image="https://b.zmtcdn.com/data/pictures/chains/6/1400226/b1c233114eac576718ad9c7ab3b0170d_featured_v2.jpg?output-format=webp"
									title="Top 'N' Town"
								/>
								<MenuSimilarRestaurantcard
									image="https://b.zmtcdn.com/data/pictures/7/18772947/2d95f1ca5dd814b071ee9957946d3181_featured_v2.jpg?output-format=webp"
									title="Caffe Creme"
								/>
								<MenuSimilarRestaurantcard
									image="https://b.zmtcdn.com/data/pictures/chains/0/1400710/d4819fe702df0fd6b8152eb1ff383968_featured_v2.jpg?output-format=webp"
									title="Monica Galaxy"
								/>
								<MenuSimilarRestaurantcard
									image="https://b.zmtcdn.com/data/pictures/chains/9/1400049/b97032496baad7a884e99146cc8056bd_featured_v2.jpg?output-format=webp"
									title="Natural Ice Cream"
								/>
							</Slider>
						</div>
					</div>
					<div className="my-4">
						<h4 className="text-lg font-medium">
							Rate your delivery experience
						</h4>
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={24}
							activeColor="#ffd700"
						/>
					</div>
					<div className="my-4 flex flex-col gap-4">
						<ReviewCard />
					</div>
				</div>
				<aside
					style={{ height: "fit-content" }}
					className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4"
				>
					<h4 className="text-lg font-medium">Call</h4>
					<h5 className="text-zomato-400 font-medium">+917803023985</h5>
				</aside>
			</div>
		</>
	);
};

export default Overview;
