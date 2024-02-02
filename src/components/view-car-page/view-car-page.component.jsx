import "./view-car-page.styles.scss";
import { selectCar } from "../../utils/firebase.utils";

const ViewCarPage = () => {
  const currentURL = window.location.href;
  //console.log("Current URL:", currentURL);

  const parts = currentURL.split("/"); // Split the URL by '/' characters
  const carId = parts[4]; // Access the 4th segment of the URL

  //console.log("Car ID:", carId); // Outputs: Ca ID

  return (
    <div>
      <h1>TO DO</h1>
      <h2>Car Brand</h2>
      <h2>Photo Gallery</h2>
      <h2>Description</h2>

      <h3>Email</h3>
    </div>
  );
};

export default ViewCarPage;
