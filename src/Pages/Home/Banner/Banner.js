import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../../images/banner.png'
const Banner = () => {
  return (
    <div className="row m-0 bg-info">
      <div className="col-lg-6 col-md-6 col-12 p-5 m-0 text-white">
        <h1 className='pt-5'>Express <span className='text-warning fw-1'> 3A </span> courier </h1>
        <h2>Fastest Delivery company in Bangladesh </h2>
        <Button className='px-5 mt-5'>About us</Button>
      </div>
      <div className="col-lg-6 col-md-6 col-12 p-5 m-0">
        <img className='img-fluid' src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;