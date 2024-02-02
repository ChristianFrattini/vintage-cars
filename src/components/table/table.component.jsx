import { deleteField } from "firebase/firestore";
import "./table.styles.scss";
//import { deleteItem } from "../../utils/firebase.utils";
import { useEffect, useState } from "react";
import ViewDescription from "../view-description/view-description.component";
import { deleteItem } from "../../redux/carSlice";
import { useDispatch } from "react-redux";
import DeleteItem from "../delete-item/delete-item.component";

const Table = ({ cars }) => {
  //const dispatch = useDispatch();

  /*const handleRemove = (id) => {
    console.log(id);
    dispatch(deleteItem(id));
  };*/

  return (
    <div className="car-table-container">
      <table className="car-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.car_id}>
              <td>{car.car_id}</td>
              <td>{car.car_name}</td>
              <td>
                <ViewDescription cars={car} />
              </td>
              <td>
                <DeleteItem ids={car.car_id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
