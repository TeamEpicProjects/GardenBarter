import React, {useState} from 'react';
import SideBar from '../SideBar/SideBar';
import NearbyCard from '../Nearby/NearbyCard';
import MyCard from '../MyCard/MyCard';
import './dashboard.css';
import AlertCard from './AlertCard';
import { cardList } from '../Data/Data';
import { myProducts } from '../Data/Data';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Dashboard = () => {
  const [renderState, setRenderSate] = useState(false);

  const nearbyFarm = (farmStatus)=>{
    setRenderSate(farmStatus);
  }

  return (
    <>
      <div className="dashboardWrapper">
        <SideBar nearbyFarm = {nearbyFarm} renderState = {renderState}/>
        <div className="dashboard">
          <div className="d_top">
            <h2>John's Farm</h2>
            <div className="icons">
            <i
                class="fa fa-bell"
                style={{ fontSize: 24, cursor: 'pointer' }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              ></i>
            </div>
            <div
              class="modal fade"
              id="exampleModal3"
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

          { renderState ? 
            <div className="d_content">
    {cardList.map(el => <NearbyCard name = {el.name} item={el.item  } photo={el.photo}  quantity = {el.quantity} time ={el.time} cardList={el}/>)}
  </div> 
          
          : <div className="d_content">
          {myProducts.map(el => <MyCard item={el.item} photo={el.photo}  quantity = {el.quantity} time ={el.time} myProducts={el}/>)}
        </div>
         }
          
        </div>
      </div>
    </> 
  );
};

export default Dashboard;
