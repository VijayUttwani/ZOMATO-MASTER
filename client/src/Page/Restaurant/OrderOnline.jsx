import React from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import MenuListContainer from "../../Components/Restaurant/Order-Online/MenuListContainer";
import FoodItem from "../../Components/Restaurant/Order-Online/FoodItem";
import FoodList from "../../Components/Restaurant/Order-Online/FoodList";

const OrderOnline = () => {
	return (
		<>
			<div className="w-full flex">
				<aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
					<MenuListContainer />
					<MenuListContainer />
				</aside>
				<div className="w-full  px-3 md:w-3/4">
					<div className="pl-3 mb-4">
						<h2 className="text-xl font-semibold">Order Online</h2>
						<h4 className="flex items-center gap-2 font-light text-gray-500">
							<AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
						</h4>
					</div>
					<section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
						<FoodList
							title="Recommended"
							items={[
								{
									price: "165",
									rating: 4,
									description:
										"Signature dark chocolate batter and 3 layers of white, milk and dark melted Belgian chocolate. The most indulgent chocolate waffle! [Hygiene Packaging]",
									title: "Triple Chocolate Waffle",
									image:
										"https://b.zmtcdn.com/data/dish_photos/659/295afd575281e4ce63d7578c806ad659.jpg?fit=around|130:130&crop=130:130;*,*",
                                },
                                {
									price: "155",
									rating: 4,
									description:
										"Classic crispy waffle and melted Belgian white chocolate and kit kat bits. Kit kat lovers! [Hygiene Packaging]",
									title: "Kit-Kat Waffle",
									image:
										"https://b.zmtcdn.com/data/dish_photos/ef4/293f237a3e942728f5f5c058ec9c7ef4.jpg?fit=around|130:130&crop=130:130;*,*",
                                },
                                {
									price: "355",
									rating: 4,
									description:
										"Signature dark chocolate single layer waffle cake layered with creamy white, milk and dark melted Belgian chocolate. Triple the chocolate, triple the fun! Sorry! Our specialized waffle cake do not allow for customized icing messages.",
									title: "Death by Chocolate Cake [Single Layer]",
									image:
										"https://b.zmtcdn.com/data/dish_photos/d75/722ed70e2ae4c865a04f649e7ab84d75.jpg?fit=around|130:130&crop=130:130;*,*",
                                },
                                {
									price: "155",
									rating: 4,
									description:
										"Signature Black Velvet Waffle + Fondant of melted white chocolate filled with crunchy Lotus Biscoff bits. An all time favourite! [Hygiene Packaging]",
									title: "Biscoff Milky Way Waffle",
									image:
										"https://b.zmtcdn.com/data/dish_photos/776/5bb746959d702ab3c091809aa440e776.jpg?fit=around|130:130&crop=130:130;*,*",
                                },
                                {
									price: "165",
									rating: 4,
									description:
										"Classic crispy waffle and blueberry compote layered with Philadelphia style cream cheese. Deliciously tart! [Hygiene Packaging]",
									title: "Blueberry Cream Cheese Waffle",
									image:
										"https://b.zmtcdn.com/data/dish_photos/8d3/daf162a08c2edb264a6714e6816918d3.jpg?fit=around|130:130&crop=130:130;*,*",
                                },
                                {
									price: "330",
									rating: 4,
									description:
										"Classic crispy single layer waffle cake layered thick with kiki spread and topped with crushed Oreos. A universal favorite! Sorry! Our specialized waffle cake do not allow for customized icing messages.",
									title: "Kiki and Oreo Cream Cake [Single Layer]",
									image:
										"https://b.zmtcdn.com/data/dish_photos/545/320e0d6d250ee35e0a34d65ea5399545.jpg?fit=around|130:130&crop=130:130;*,*",
								},
							]}
                        />
                        <FoodList
							title="Beverages"
							items={[
								{
									price: "160",
									rating: 4,
									description:
										"One of our darker chocolate shake made with Belgian chocolate! [Hygiene Packaging]",
									title: "Belgian Chocolate Shake",
									image:
										"https://b.zmtcdn.com/data/dish_photos/79c/7d92e42703c82bb492529ac03d69c79c.jpg?fit=around|130:130&crop=130:130;*,*",
                                },
                                {
									price: "130",
									rating: 4,
									description:
										"A perfectly balanced cold coffee. [Hygiene Packaging]",
									title: "Signature Cold Coffee",
									image:
										"https://b.zmtcdn.com/data/dish_photos/1e4/70cff1c6eb37560f3da30aa8701141e4.jpg?fit=around|130:130&crop=130:130;*,*",
                                },
							]}
						/>
					</section>
				</div>
			</div>
		</>
	);
};

export default OrderOnline;
