import React from 'react'

const Card = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top p-3" src="https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">User 2</h5>
                <p className="card-text">Quantity available</p>
                <p className="card-text">time to harvest</p>
                <a href="#" className="btn">Barter</a>
            </div>
        </div>
    )
}

export default Card;