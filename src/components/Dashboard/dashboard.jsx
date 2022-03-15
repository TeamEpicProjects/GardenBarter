import React from 'react';
import SideBar from '../SideBar/SideBar';
import Card from './Card';
import './dashboard.css';
const Dashboard = () => {
  return (
    <>
      <div className="dashboardWrapper">
        <SideBar />
        <div className="dashboard">
          <div className="d_top">
            <h2>John's Farm</h2>
            <div className="icons">
              <i class="fa fa-bell" style={{ fontSize: 24 }}></i>
            </div>
          </div>

          <div className="d_content">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
