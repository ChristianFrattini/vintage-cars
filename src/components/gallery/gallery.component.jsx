import { useState } from "react";
import { useSelector } from "react-redux";

const Gallery = ({ imagesURL }) => {
  const [magnifiedImage, setMagnifiedImage] = useState(null);
  console.log(imagesURL);

  // Function to handle click on an image
  const handleImageClick = (image) => {
    setMagnifiedImage(image);
  };

  // Function to handle closing the magnified image
  const handleCloseMagnifiedImage = () => {
    setMagnifiedImage(null);
  };

  return (
    <div className="gallery">
      <div className="thumbnails">
        {/* Display thumbnails */}
        {imagesURL.map((image) => (
          <img src={image} onClick={() => handleImageClick(image)} />
        ))}
      </div>

      {/* Magnified image */}
      {magnifiedImage && (
        <div
          className="magnified-image-overlay"
          onClick={handleCloseMagnifiedImage}
        >
          <div className="magnified-image">
            <img src={magnifiedImage} alt="Magnified" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
