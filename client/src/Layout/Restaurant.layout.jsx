import React from "react";

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";

const RestaurantLayout = () => {
	return (
		<>
			{" "}
			<RestaurantNavbar />
			<div className="container mx-auto px-4 lg:px-20 ">
				<ImageGrid
					images={[
						"https://b.zmtcdn.com/data/pictures/chains/0/18624990/cfbda35382090ddbf5128a946c235f74.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
						"https://b.zmtcdn.com/data/pictures/0/18624990/0bd7c9d99cb27ef29ade2c0000f20987.jpg?fit=around|300:273&crop=300:273;*,*",
						"https://b.zmtcdn.com/data/pictures/0/18624990/9b7610445f151daaffda3acd3fcec90b.jpg?fit=around|300:273&crop=300:273;*,*",
						"https://b.zmtcdn.com/data/pictures/0/18624990/f1847d226ef2df934c57bb6717ff4b98.jpg?fit=around|300:273&crop=300:273;*,*",
						"https://b.zmtcdn.com/data/dish_photos/659/295afd575281e4ce63d7578c806ad659.jpg?fit=around|130:130&crop=130:130;*,*",
					]}
				/>
			</div>
		</>
	);
};

export default RestaurantLayout;
