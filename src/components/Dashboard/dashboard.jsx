import React from 'react';
import SideBar from '../SideBar/SideBar';
import AlertCard from './AlertCard';
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
              <i
                class="fa fa-bell"
                style={{ fontSize: 24, cursor: 'pointer' }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              ></i>
            </div>

            <div
              class="modal fade"
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title"
                      style={{ color: 'black' }}
                      id="exampleModalLabel"
                    >
                      Awaiting Orders for John Doe
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div class="modal-body">
                      <div class="container-fluid text-black">
                        <div class="row">
                          <div className="col-sm-12">
                            <AlertCard />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
