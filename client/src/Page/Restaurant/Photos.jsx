import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollection from "../../Components/Restaurant/PhotosCollection";

const Photos = () => {
	const [photos, setPhotos] = useState([
		"https://b.zmtcdn.com/data/pictures/0/18624990/0bd7c9d99cb27ef29ade2c0000f20987.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		"https://b.zmtcdn.com/data/pictures/0/18624990/9b7610445f151daaffda3acd3fcec90b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		"https://b.zmtcdn.com/data/pictures/0/18624990/d496ba96000cdab209b7c8aa8b8709cc.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		"https://b.zmtcdn.com/data/pictures/0/18624990/86d74ac81d601ade96e2de349190ae22.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		"https://b.zmtcdn.com/data/pictures/0/18624990/a2f10e42177137ada472958370c848b1.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		"https://b.zmtcdn.com/data/pictures/0/18624990/a126975fb82c2754a5c105d649f99aa8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		"https://b.zmtcdn.com/data/pictures/0/18624990/877c490cfcdf46bf399ea20d6061ce4a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
		"https://b.zmtcdn.com/data/pictures/chains/0/18624990/cfbda35382090ddbf5128a946c235f74.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/pictures/0/18624990/992d8ed94245330492fffef4d7ea1d9c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/pictures/0/18624990/f1847d226ef2df934c57bb6717ff4b98.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
	]);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [CurrentImg, setCurrentImg] = useState(0);
	const closeViewer = () => setIsMenuOpen(false);

	const openViewer = () => setIsMenuOpen(true);

	return (
		<>
			{isMenuOpen && (
				<ImageViewer
					src={photos}
					currentIndex={CurrentImg}
					disableScroll={false}
					onClose={closeViewer}
				/>
			)}

			<div className="flex flex-wrap gap-2">
				{photos.map((photo) => (
					<PhotoCollection image={photo} openViewer={openViewer} />
				))}
			</div>
		</>
	);
};

export default Photos;
