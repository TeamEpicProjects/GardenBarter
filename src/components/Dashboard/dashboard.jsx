import React from 'react'
import SideBar from '../SideBar/SideBar'
import './dashboard.css'
const Dashboard = () => {
    return (
        <>
            <div className='dashboardWrapper'>
                <SideBar />
                <div className="dashboard">
                    <div className="d_top">
                        <h2>John's Farm</h2>
                        <div className="icons">
                            <p>icon1</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard;