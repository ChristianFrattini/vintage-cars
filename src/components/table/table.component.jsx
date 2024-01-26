import { deleteField } from "firebase/firestore";
import "./table.styles.scss";
import { deleteItem } from "../../utils/firebase.utils";
import { useEffect, useState } from "react";
import ViewDescription from "../view-description/view-description.component";

const Table = ({ cars }) => {
  const handleRemove = (id) => {
    deleteItem(id);
  };

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
                <ViewDescription cars={cars} />
              </td>
              <td>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(car.car_id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
