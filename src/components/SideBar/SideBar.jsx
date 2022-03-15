import React from 'react';
import './sidebar.css';
import Modal from '../Modal/Modal'

const SideBar = ({nearbyFarm, renderState}) => {

  const handleClick = ()=>{
    if(renderState === false){
      nearbyFarm(true);
    }
    else {
      nearbyFarm(false);
    }
  }

  return (
    <div className="sidebar">
      <div className="box1">
        <i className="fa fa-circle-user fa-8x"></i>
        <h2>John Doe</h2>
      </div>
      <div className="box2 flexC">
        <a>Barter's Request</a>
        <Modal/>
        <button onClick={handleClick} type="button" class="btn btn2">
          My Farms
        </button>
        <button onClick={handleClick} type="button" class="btn btn2">
          Nearby Farms
        </button>
      </div>
    </div>
  );
};

export default SideBar;
