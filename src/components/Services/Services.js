import React from 'react';
import useService from '../../hooks/useService';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
  const [services, setServices] = useService();

  const sliceService = services.slice(0, 6);
  return (
    <div className="container">
      <h1 className="text-center mt-5 service-text mb-4">Equipment Fitness</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {sliceService.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
