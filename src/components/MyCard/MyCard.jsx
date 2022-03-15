import React from 'react';
import '../Nearby/NearbyCard.css';
import { myProducts } from '../Data/Data';
const MyCard = ({item, quantity, time, photo}) => {

  const onDelete = () => {
    document.getElementById('productCard').remove();
  };

  return (
      <div>
        <div className="card" id="productCard">
          <img
            src={photo}
            alt=""
            className="card-img-top productImg"
          />
          <div className="card-body ">
            <h5 className="card-title">{item}</h5>
            <p>Quantity: {quantity}</p>
            <p>Time to harvest: {time}</p>

            <button type="button btn-danger" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={onDelete}>
              Delete
            </button>

          </div>
        </div>
      </div>
    )
  
};

export default MyCard;
