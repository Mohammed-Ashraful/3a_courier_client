import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer m-0 p-0 text-white'>
      <div className='row m-0 rounded call-center'>
        <div className="col-md-6 col-12 p-0 bg-primary">
          <img src={`https://i.ibb.co/KVyg8Vq/Cropped-shot-of-an-attractive-young-woman-working-in-a-call-center.jpg`} className='footer-img' alt="" />
      </div>
        <div className='col-md-6 col-12 bg-warning text-white text-center pt-5'>
          <h1>Call us to know any information</h1>
          <h2>+938424630</h2>
      </div>
      </div>
      <h1>3A Courier </h1>

      <div className="fs-1 ps-5">
        <i className="px-3 fs-2 fab fa-facebook"></i>
        <i className="px-3 fs-2 fab fa-instagram"></i>
        <i className="px-3 fs-2 fab fa-github"></i>
        <i className="px-3 fs-2 fab fa-twitter"></i>
      </div>
      <span> © 3A courier All Rights Reserved</span>
    </div>
  );
};

export default Footer;