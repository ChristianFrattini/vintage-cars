import "./view-description.styles.scss";
import { useState } from "react";

const ViewDescription = ({ cars }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  console.log();

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseButtonClick = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Expand</button>

      {isFormVisible && (
        <div className="overlay">
          <div className="form-container">
            <h2>{cars.car_name}</h2>
            <h3>Description</h3>
            <p>{cars.car_description}</p>

            <button className="close-button" onClick={handleCloseButtonClick}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ViewDescription;
