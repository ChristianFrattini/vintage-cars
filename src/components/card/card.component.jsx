import { useEffect } from "react";
import "./card.styles.scss";
import { Link, useNavigate } from "react-router-dom";
import ViewCarPage from "../view-car-page/view-car-page.component";

const Card = ({ car }) => {
  let car_link;
  const { car_id, car_name } = car;
  car_link = `/${car_name}`;

  return (
    <div className="card-container" key={car_id}>
      <div className="card-name">
        <h2>{car_name}</h2>
      </div>
      <div></div>
      <div className="card-learnmore">
        <Link to={car_link}>Learn More</Link>
      </div>
      <div className="contacts">
        <h3>Email</h3>
      </div>
    </div>
  );
};

export default Card;
