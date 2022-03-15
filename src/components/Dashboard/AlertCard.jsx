import React, { useState } from 'react';

const AlertCard = () => {
  const [showInput, setShowInput] = useState(false);
  const [reason, setReason] = useState('');

  const openInput = () => {
    setShowInput(!showInput);
  };

  const closeNotifi = () => {
    document.getElementById('notify').remove();
  };

  const onSubmit = () => {
    document.getElementById('notify').remove();
  };

  console.log(reason);
  return (
    <div class="alert alert-success" role="alert">
      <div id="notify">
        <h5 class="alert-heading">Ms Daisy's Request</h5>
        <ul>
          <li>Item Grown: Carrots</li>
          <li>Quantity: 5 kgs</li>
          <li>Harvest Time: Ready to Harvest</li>
        </ul>
        <hr />
        <div className="mb-0 flexR">
          <button className="btn text-white" onClick={closeNotifi}>
            <i className="fa fa-check"></i>
          </button>
          <button className="btn btn-red mx-3 text-white" onClick={openInput}>
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div style={showInput ? { display: 'block' } : { display: 'none' }}>
          <input className="form-control mt-4" placeholder="Specify Reason" />
          <button className="btn" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
