import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
  const { name, supplier, img, quantity, price, description } = service;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>Supplier: {supplier}</h6>
          <p>
            Quantity: <strong>{quantity}</strong>
          </p>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <Link to="/checkout">
            <button className="my-color">Stock Update</button>
          </Link>
          <span className="cart-price fs-3">
            <strong>{price}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
