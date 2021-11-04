import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Booking.css'
const Booking = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  },[])
  return (
    <div className='container booking-container'>
      <Card>
        <Card.Img variant="top" src={service.img} alt='service-images' />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>{service.details}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Booking;