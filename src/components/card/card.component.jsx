import { useEffect } from "react";
import "./card.styles.scss";
import { Link, useNavigate } from "react-router-dom";

let car_link;

const Card = ({ car }) => {
  const { car_id, car_name, imageURL } = car;

  car_link = `cars/${car_id}/${car_name}`;

  return (
    <div className="card-container" key={car_id}>
      <div className="card-name">
        <h2>{car_name}</h2>
      </div>
      <div className="image-container">
        <img src={imageURL} alt={`cars/${car_id}/${car_name}`} />
      </div>
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
