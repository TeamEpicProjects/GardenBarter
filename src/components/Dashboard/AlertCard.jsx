import React, { useState } from 'react';

const AlertCard = () => {
  const [show, setShow] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [reason, setReason] = useState('');
  const toggleDropdown = () => {
    setShow(!show);
  };
  const openDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const menuClass = `dropdown-menu${show ? ' show' : ''}`;
  console.log(reason);
  return (
    <div class="alert alert-success" role="alert">
      <h5 class="alert-heading">Ms Daisy's Request</h5>
      <ul>
        <li>Item Grown: Carrots</li>
        <li>Quantity: 5 kgs</li>
        <li>Harvest Time: Ready to Harvest</li>
      </ul>
      <hr />
      <div className="mb-0 flexR">
        <button className="btn text-white">
          <i className="fa fa-check"></i>
        </button>
        <button className="btn btn-red mx-3 text-white" onClick={openDropDown}>
          <i className="fa fa-times"></i>
        </button>
        <div style={showDropDown ? { display: 'block' } : { display: 'none' }}>
          <div className="dropdown" onClick={toggleDropdown}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
            >
              Reasons
            </button>
            <div className={menuClass} aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item"
                onClick={() => setReason('Reason-1')}
              >
                Reason-1
              </a>
              <a
                className="dropdown-item"
                onClick={() => setReason('Reason-2')}
              >
                Reason-2
              </a>
              <a
                className="dropdown-item"
                onClick={() => setReason('Reason-3')}
              >
                Reason-3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
