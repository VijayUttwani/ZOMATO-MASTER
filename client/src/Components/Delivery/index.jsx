import React, { useState } from "react";

// components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "./RestaurantCard";

const Delivery = () => {
	const [restaurantList, setRestaurantList] = useState([
		{
			_id: "123456",
			photos: [
				"https://b.zmtcdn.com/data/pictures/chains/3/1401863/930ee0cc8be9a105207904e0979904b3_o2_featured_v2.jpg?output-format=webp",
			],
			name: "Vijayshree Sandwich",
			cuisine: ["Fast Food", "Beverages", "Sandwich"],
			averageCost: 200,
			isPro: true,
			isOff: 80,
			durationOfdelivery: 25,
			restaurantReviewValue: 4.3,
        },
        {
			_id: "123456-2",
			photos: [
				"https://b.zmtcdn.com/data/pictures/chains/3/18343993/c0fba8fbbd5bdac58e0e5d3b277a5cd4_o2_featured_v2.jpg?output-format=webp",
			],
			name: "Behrouz Biryani",
			cuisine: ["Biryani", "North Indian", "Mughlai"],
			averageCost: 350,
			isPro: true,
			isOff: 80,
			durationOfdelivery: 47,
			restaurantReviewValue: 4.7,
        },
		{
			_id: "123456-3",
			photos: [
				"https://b.zmtcdn.com/data/pictures/5/1400315/d464789d84c842dfc3f6c5c1d283f361_o2_featured_v2.jpg?output-format=webp",
			],
			name: "Johny Hot Dog",
			cuisine: ["Fast Food", "Hot Dog", "Egg-Benjo"],
			averageCost: 30,
			isPro: true,
			isOff: 80,
			durationOfdelivery: 30,
			restaurantReviewValue: 5,
        },
	]);

	return (
		<>
			<DeliveryCarousal />
			<Brand />
			<div className="flex justify-between flex-wrap">
				{restaurantList.map((restaurant) => (
					<RestaurantCard {...restaurant} key={restaurant._id} />
				))}
			</div>
		</>
	);
};

export default Delivery;
