import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import './add-form.styles.scss'
import { addItem } from '../../utils/firebase.utils';

const AddItem = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 501); 
  };

  const handleButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseButtonClick=()=>{
    setIsFormVisible(false)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const id=generateRandomNumber().toString()

    addItem(id, brand, description)
    console.log(id, brand, description)
    setIsFormVisible(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Add New</button>

      {isFormVisible && (
        <div className="overlay">
          <div className="form-container">
            <h3>Add New Item</h3>
            <form onSubmit={handleFormSubmit}>
              <label>
                Brand:
                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required />
              </label>
              <br />
              <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
              </label>
              <br />
              <button className='submit-button' type="submit">Submit</button>
              <button className="close-button" onClick={handleCloseButtonClick}>Close</button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddItem;
