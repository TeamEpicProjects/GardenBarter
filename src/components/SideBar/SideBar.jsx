import React from 'react';
import './sidebar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="box1">
        <i className="fa fa-circle-user fa-8x"></i>
        <h2>John Doe</h2>
      </div>
      <div className="box2">
        <a>Barter's Request</a>
      </div>
    </div>
  );
};

export default SideBar;
