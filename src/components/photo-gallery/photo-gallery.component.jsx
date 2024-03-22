/* eslint-disable react/prop-types */
import "./photo-gallery.styles.scss";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types

const PhotoGallery = ({ image }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleImageHover = (index) => {
    setExpandedIndex(index); // Expand the hovered image
  };

  const handleImageLeave = () => {
    setExpandedIndex(null); // Collapse the image when mouse leaves
  };

  return (
    <div className="photo-gallery">
      <img
        src={image}
        alt={`Image ${image}`}
        className={expandedIndex !== null ? "expanded" : ""}
        onMouseEnter={() => handleImageHover(0)} // Set index to 0 for single image
        onMouseLeave={handleImageLeave}
      />
    </div>
  );
};
export default PhotoGallery;
