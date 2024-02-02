import "./card-list.styles.scss";
import Card from "../card/card.component";
import { useDispatch, useSelector } from "react-redux";
//import { getCarsList } from "../../utils/firebase.utils";
import { useEffect } from "react";
import { fetchCarsList } from "../../redux/carSlice";
//import { cars } from '../../utils/firebase.utils';

const CardList = () => {
  //const cars = getCarsList();
  const dispatch = useDispatch();
  //console.log(cars);
  const cars = useSelector((state) => state.cars.carsArray);
  //console.log(cars);

  useEffect(() => {
    dispatch(fetchCarsList());
  }, [dispatch]);

  return (
    <div className="card-list">
      {cars.map((car) => {
        //console.log(car);
        return <Card key={car.car_id} car={car} />;
      })}
    </div>
  );
};

export default CardList;
