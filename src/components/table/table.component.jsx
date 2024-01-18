import { deleteField } from 'firebase/firestore'
import './table.styles.scss'
import { deleteItem } from '../../utils/firebase.utils'


const Table=({cars})=>{

    return(
        <div className='car-table-container'>
            <table className='car-table'>
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
            <td>{car.car_description}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    )
}

export default Table