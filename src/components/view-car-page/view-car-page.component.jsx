import { useDispatch, useSelector } from "react-redux";
import "./view-car-page.styles.scss";
import { fetchItem } from "../../redux/carSlice";
//import { selectCar } from "../../utils/firebase.utils";
import { useEffect } from "react";

const ViewCarPage = () => {
  const currentURL = window.location.href;
  //console.log("Current URL:", currentURL);
  const dispatch = useDispatch();

  const car = useSelector((state) => state.cars.carArray);

  const parts = currentURL.split("/"); // Split the URL by '/' characters
  const carId = parts[4]; // Access the 4th segment of the URL

  useEffect(() => {
    dispatch(fetchItem(carId.toString()));
    //console.log(carId.toString());
  }, [dispatch]);

  const { car_id, car_name, car_description } = car;
  return (
    <div>
      <h2>{car_name}</h2>
      <h2>Photo Gallery</h2>
      <h2>{car_description}</h2>

      <h3>Email</h3>
    </div>
  );
};

export default ViewCarPage;
