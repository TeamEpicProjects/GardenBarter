import React from 'react';

const Card = () => {
  return (
    <div class="card" id="productCard">
      <img
        src="https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1024-80.jpg.webp"
        alt=""
        class="card-img-top productImg"
      />
      <div class="card-body">
        <h5 class="card-title">Ms Daisy</h5>
        <p>
          Item Available: <b>Potatoes</b>
        </p>
        <p>Quantity: 30kgs</p>
        <p>Time to harvest: 7 days</p>
        <a href="" class="btn mt-3">
          Barter
        </a>
      </div>
    </div>
  );
};

export default Card;
