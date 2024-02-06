import { deleteItem, fetchCarsList } from "../../redux/carSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const DeleteItem = (car_id) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    //console.log(car_id);
    dispatch(deleteItem(car_id));
    dispatch(fetchCarsList());
  };

  return (
    <div>
      <button className="remove-button" onClick={() => handleRemove()}>
        X
      </button>
    </div>
  );
};

export default DeleteItem;
