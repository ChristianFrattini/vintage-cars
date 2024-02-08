import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./add-form.styles.scss";
import { addFrontImage, addItem } from "../../redux/carSlice";
import { useDispatch } from "react-redux";

import { storage } from "../../utils/firebase.utils";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

const AddItem = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [car_name, setBrand] = useState("");
  const [car_description, setDescription] = useState("");
  const [car_image, setImage] = useState(null);
  const dispatch = useDispatch();

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 501);
  };

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseButtonClick = () => {
    setIsFormVisible(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const car_id = generateRandomNumber().toString();

    const car = { car_id, car_name, car_description };
    dispatch(addItem(car));

    const imageDetails = { car_image, car_id };
    dispatch(addFrontImage(imageDetails));
    setIsFormVisible(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Add New</button>

      {isFormVisible && (
        <div className="overlay">
          <div className="form-container">
            <h3>Add New Item</h3>
            <form onSubmit={handleFormSubmit}>
              <label>
                Brand:
                <input
                  type="text"
                  value={car_name}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Description:
                <textarea
                  value={car_description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
              <br />

              <br />
              <label>
                Image 1:
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
              </label>
              <br />

              <br />

              <br />
              <button className="submit-button" type="submit">
                Submit
              </button>
              <button className="close-button" onClick={handleCloseButtonClick}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddItem;
