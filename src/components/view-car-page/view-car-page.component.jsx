import { useDispatch, useSelector } from "react-redux";
import "./view-car-page.styles.scss";
import { fetchItem } from "../../redux/carSlice";
//import { selectCar } from "../../utils/firebase.utils";
import { useEffect } from "react";
import Gallery from "../gallery/gallery.component";

const ViewCarPage = () => {
  const currentURL = window.location.href;
  //console.log("Current URL:", currentURL);
  const dispatch = useDispatch();

  const parts = currentURL.split("/"); // Split the URL by '/' characters
  const carId = parts[4]; // Access the 4th segment of the URL

  const car = useSelector((state) => state.cars.carArray);

  useEffect(() => {
    dispatch(fetchItem(carId.toString()));
    //console.log(carId.toString());
  }, [dispatch]);
  console.log(car);

  return (
    <div>
      <h2>{car.car_name}</h2>

      <img src={car.imageURL} />

      <h2>{car.car_description}</h2>

      <h3>Email</h3>
    </div>
  );
};

export default ViewCarPage;
