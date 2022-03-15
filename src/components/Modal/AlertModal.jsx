import React from 'react';

const Modal = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        Add Product
      </button>

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
                Add Product
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
                    <div class="col-md-4">Product Name</div>
                    <div class="col-md-8">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Default input"
                        value="Potato"
                        aria-label="default input example"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-4">Quantity</div>
                    <div class="col-md-8">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="5-100Kg"
                        aria-label="default input example"
                      />
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="col-md-4">Expected Date</div>
                    <div class="col-md-8">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="7 days"
                        aria-label="default input example"
                      />
                    </div>
                  </div>

                  <div className="flexC">
                    <div>loading...</div>
                    <button className="btn">Upload Image</button>
                    <button className="btn">Submit</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Send Request</button>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
