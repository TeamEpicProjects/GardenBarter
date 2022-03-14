import React from 'react';
import '../css/signin.css'
import intro_image from '../assets/intro_image.svg';
const Signin = () => {
    return (
        <div>
            <div className="left">
                <div className="intro-image">
                    <img src={intro_image} alt="farm" />
                </div>
                <div className='intro-text'>
                    <h4>A new way to nvest in agriculture</h4>
                </div>
            </div>
            <div className="right">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signin