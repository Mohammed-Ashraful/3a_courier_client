import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const ManageOrder = () => {
  const [singleOrder, setSingleOrder] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch('http://localhost:5000/order')
      .then(res => res.json())
      .then(data => setSingleOrder(data))
  }, [])
  return (
    <>
      <h1>{singleOrder.length}</h1>
      {
        singleOrder?.map(order => <div className='m-0 row'>
          <div className="bg-info py-5 gx-5 container row my-5 w-100 m-0 rounded">
          <div className="col-md-4 col-lg-4 m-0">
          <img src={order.serviceOrder.img} alt='img' />
          <Card.Body>
              <Card.Text> <b> Details : </b> {order.serviceOrder.details}</Card.Text>
          </Card.Body>
            </div>
            <div className="col-md-4 col-lg-4">
            <h2> {order.Name} </h2>
            <h4> {order.email} </h4>
            <h6> {order.Phone} </h6>
            <p> {order.address} </p>
            </div>
            <div className="col-md-4 col-lg-4">
              <h5>Status : {order.status} </h5>
            </div>
          </div>  
        </div>)
      }
    </>
  );
};

export default ManageOrder;