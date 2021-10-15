import React from "react";
import Slider from "react-slick";

// components
import { NextArrow, PrevArrow } from "../CarousalArrow";

const Brand = (props) => {
	const logos = [
		"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
		"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
		"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
		"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp",
		"https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383019.png?output-format=webp",
		"https://b.zmtcdn.com/data/brand_creatives/logos/a7d28fb80d54066761f3d46c17168274_1617972125.png?output-format=webp",
		"https://b.zmtcdn.com/data/brand_creatives/logos/948574cd50798ba77c066b93e11b0e24_1617972221.png?output-format=webp",
	];
	const settings = {
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<h1 className="text-xl mb-4 font-semibold my-4">Top brands for You</h1>
			<div className="my-5">
				<Slider {...settings}>
					{logos.map((logo) => (
						<div className="w-32 h-32 mx-10 bg-white">
							<img src={logo} alt="brand" className="w-32 h-32" />
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default Brand;
