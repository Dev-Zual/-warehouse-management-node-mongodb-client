import { useState, useEffect } from 'react';
const useService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://gentle-ridge-91223.herokuapp.com/service')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};
export default useService;
