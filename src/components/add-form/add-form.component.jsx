import React, { useEffect, useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./add-form.styles.scss";
import { addItem } from "../../redux/carSlice";
import { useDispatch, useSelector } from "react-redux";
//import { addFrontImage } from "../../utils/firebase.utils";

const AddItem = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [car_name, setBrand] = useState("");
  const [car_description, setDescription] = useState("");
  const [car_image, setImage] = useState(null);
  const dispatch = useDispatch();

  // const imageURL = useSelector((state) => state.cars.imageURL);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 501);
  };

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseButtonClick = () => {
    setIsFormVisible(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const car_id = generateRandomNumber().toString();

    //addFrontImage(car_image, car_id); //uploads image
    console.log("waiting start");

    // Code here will be executed after the delay

    let imageURL;

    convertToBase64(car_image).then((base64String) => {
      imageURL = base64String;
      console.log(imageURL);
      const car = { car_id, car_name, car_description, imageURL }; //create data doc

      dispatch(addItem(car));
      console.log("waiting finish");
    });

    //console.log(imageURL);
    //const car = { car_id, car_name, car_description, imageURL }; //create data doc

    //dispatch(addItem(car));

    //console.log(imageURL);

    setIsFormVisible(false);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
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
