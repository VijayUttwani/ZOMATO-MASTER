import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const ReviewCard = () => {
	return (
		<>
			<div className="my-3 flex flex-col gap-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="w-10 h-10 rounded-full">
							<img
								src="https://image.shutterstock.com/image-vector/v-letter-logo-design-vector-600w-1158630004.jpg"
								alt="avatar"
								className="w-full h-full rounded-full object-cover"
							/>
						</div>
						<div className="flex flex-col">
							<h3 className="text-lg font-semibold">Vijay Kumar Uttwani</h3>
							<small className="text-gray-500">
								5 Reviews &#8226; 3 Followers
							</small>
						</div>
					</div>
					<button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
						Follow
					</button>
				</div>
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-3">
						<span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
							4 <TiStarFullOutline />
						</span>
						<h5 className="font-regular uppercase">Delivery</h5>
						<small className="text-gray-500">3 days ago</small>
					</div>
					<div className="w-full">
						<p className="w-full text-gray-600 font-light text-base">
							A dream come true for when you cannot decide if you should eat ice
							cream or waffles – fear not because the Waff-wich is here!
							Available in two varieties; vanilla and dark chocolate- this one
							is a hit for all those who have an extra sweet tooth or cannot
							make up your mind which one to settle with. The waffle is soft,
							and perfectly cooked and topped with powdered sugar.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReviewCard;
