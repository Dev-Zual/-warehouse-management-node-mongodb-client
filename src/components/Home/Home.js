import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

import Slider from '../Slider/Slider';
import WhoWe from '../WhoWe/WhoWe';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <Banner></Banner>
      <WhoWe></WhoWe>
    </div>
  );
};

export default Home;
