/* eslint-disable react/prop-types */
import "./photo-gallery.styles.scss";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types

const PhotoGallery = ({ image }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`photo-gallery ${isFullScreen ? "full-screen" : ""}`}>
      <img src={image} alt={`Image ${image}`} onClick={toggleFullScreen} />
    </div>
  );
};
export default PhotoGallery;
