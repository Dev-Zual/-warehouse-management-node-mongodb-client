import React from 'react';
import './Banner.css';
const Banner = () => {
  return (
    <div className="container mb-5">
      <div className="row g-3 mt-5">
        <div className="col-md-4">
          <div className="row mb-4 position-relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0265/4945/2871/files/banner_2.1.jpg?v=1575690991"
              alt=""
            />
            <div className="position-absolute text-white banner-img-text">
              <h2>Dummbell</h2>
            </div>
          </div>
          <div className="row gy-3 position-relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0265/4945/2871/files/banner_2.5.jpg?v=1575691008"
              alt=""
            />
            <div className="position-absolute text-white banner-img-text">
              <h2>BallGym</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row position-relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0265/4945/2871/files/banner_2.3.jpg?v=1575691019"
              alt=""
            />
            <div className="position-absolute text-white banner-img-text">
              <h2>Push Up</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row mb-4 position-relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0265/4945/2871/files/banner_2.2.jpg?v=1575691580"
              alt=""
            />
            <div className="position-absolute text-white banner-img-text">
              <h2>Skip Rope</h2>
            </div>
          </div>
          <div className="row position-relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0265/4945/2871/files/banner_2.4.jpg?v=1575690981"
              alt=""
            />
            <div className="position-absolute text-white banner-img-text-right">
              <h2>Deadlift</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
