import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Booking.css'
const Booking = () => {

  const [service, setService] = useState([]);
  const { id } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    data.serviceOrder = service;
    data.status = 'pending';
    axios.post('http://localhost:5000/order', data)
      .then(res => {
        reset();
        if (res.data.insertedId) {
          alert('Added Successfully ')
        }
      })
  };

  useEffect(() => {
    fetch(`https://young-fjord-77077.herokuapp.com/service/${id}`)
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
          <Button
            className='px-5 bg-secondary'
            as={Link}
            to='/bookingInfo'
          >Book Now </Button>
        </Card.Body>
      </Card>
      <div className='booking'>
        <h1>Please add a service </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input value={user?.displayName} placeholder='Enter Your  Name' {...register("Name", { required: true })} />
          <input value={user?.email} placeholder='Enter Email' {...register("email")} />
          <input placeholder='Your Address' {...register("address")} />
          <input placeholder='Phone' type="number" {...register("Phone")} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Booking;