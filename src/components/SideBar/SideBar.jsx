import React, { useEffect } from 'react';
import './sidebar.css';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ nearbyFarm, renderState }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (renderState === false) {
      nearbyFarm(true);
    } else {
      nearbyFarm(false);
    }
  };
  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/');
    }
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    if (!localStorage.getItem('user')) {
      navigate('/');
    }
  };
  return (
    <div className="sidebar">
      <div className="box1">
        <i className="fa fa-circle-user fa-8x"></i>
        <h2>John Doe</h2>
        <button className="btn btn2" onClick={handleLogout}>
          Logout
          <i className="fa fa-lock mx-2"></i>
        </button>
      </div>
      <div className="box2 flexC">
        <a>Barter's Request</a>
        <Modal />
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
