import React from 'react'
import './components/css/login.css'
import image from './image.jpg';

function login() {
    return (
        <div className="wrapper">
            <div className="left">
                <img src={image} alt="intro_image" />
                <h4>A new way to invest in agriculture</h4>
            </div>
            <div className="right">
                <div className="form-div">
                    <form className='form-outermost'>
                        <h2 className='signup'> Sign Up</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Address' />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                        </div >
                        <button type="submit" className="btn btn-primary" > Submit</button >
                        <a href="/">Already in the system ?</a>
                    </form >
                </div >
            </div >
        </div >
    )
}

export default login;