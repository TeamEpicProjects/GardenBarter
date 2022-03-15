import React, {useState} from 'react';
import './modal.css'
import { myProducts ,addingProduct } from '../Data/Data';
import upload from '../../assets/upload.png';


const Modal = () => {

  const [productDetails, setProductDetails] = useState({item : "", photo : "", quantity : "", expectedDate : ""})
  // const [item, setItem] = useState({});


  const addProduct = ()=>{
    console.log(myProducts);
    myProducts.push(productDetails);
    console.log(myProducts);
    alert("Product Added")
  }

  const handleChange = (e)=>{
    setProductDetails({...productDetails, [e.target.name]: e.target.value});
  }
  return (
    
<>
<button type="button" class="btn btn2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Add Product
        </button>
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" style={{color:'black'}} id="exampleModalLabel">Add Product</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="modal-body">
                  <div class="container-fluid text-black">
                    <div class="row"> 
                      <div class="col-md-4">Product Name</div>
                      <div class="col-md-8" >
                        <input class="form-control" id="inputCheck" minlength="3" onChange={handleChange} name="item" type="text" placeholder="Product Name" aria-label="default input example" />
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-4">Quantity</div>
                      <div class="col-md-8"><input class="form-control" name="quantity" minlength="3" onChange={handleChange} type="text" placeholder="1-50Kg" aria-label="default input example" /></div>
                    </div>

                    <div class="row mt-3">
                      <div class="col-md-4">Expected Days</div>
                      <div class="col-md-8"><input class="form-control" minlength="3" name="expectedDate" onChange={handleChange} type="text" placeholder="1-30 days" aria-label="default input example" /></div>
                    </div>                        
                        <div className="flexC">
                            <div class="btn btn-sm upload-btn">
                              <input type="file" name="photo" id="file" accept='image/*'/>
                              <label For="file"> Upload Image  <img src={upload} alt="" />
                              </label>
                            </div>
                            <button onClick={addProduct} type="submit" className="btn">Submit</button>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</>
  );
};

export default Modal;
