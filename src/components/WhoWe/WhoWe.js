import React from 'react';
import './WhoWe.css';
const WhoWe = () => {
  return (
    <div className="section-margin">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1 className="mb-4 mt-5 who-text">Who We Are</h1>
            <p className="mt-4 lh-lg">
              We believe in a world where you have total freedom to be you,
              without judgement. To experiment. To express yourself. To be brave
              and grab life as the extraordinary adventure it is. So we make
              sure everyone has an equal chance to discover all the amazing
              things they’re capable of – no matter who they are, where they’re
              from or what looks they like to boss. We exist to give you the
              confidence to be whoever you want to be
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://cdn.shopify.com/s/files/1/0265/4945/2871/files/about2.jpg?v=1576211919"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWe;
