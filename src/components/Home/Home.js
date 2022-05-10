import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

import Slider from '../Slider/Slider';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <Banner></Banner>
    </div>
  );
};

export default Home;
