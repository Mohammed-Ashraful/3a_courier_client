import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {

  const [singleOrder, setSingleOrder] = useState([]);
  const { user } = useAuth();

  const handleRemove = id => {
    const url = `https://young-fjord-77077.herokuapp.com/order/${id}`
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        setSingleOrder(data)
        window.confirm("R u sure ")
      })
  }

  useEffect(() => {
    fetch('https://young-fjord-77077.herokuapp.com/order')
      .then(res => res.json())
      .then(data => setSingleOrder(data))
  }, []);

  const remainingOrder = singleOrder?.filter(myOrder => myOrder.email === user.email)

  return (
    <div>
      <h1>MY Orders </h1>
      {
        remainingOrder?.map(order =>
          <div
            key={order._id}
            className='m-0 row'>
          <div className="order-bg py-5  container row my-5 mx-auto m-0 rounded">
            <div className="col-md-4 col-lg-4 m-0">
              <img src={order.serviceOrder.img} alt='img' className='img-fluid p-0 m-0' />
              <Card.Body>
                <Card.Text> <b> Details : </b> {order.serviceOrder.details}</Card.Text>
              </Card.Body>
            </div>
            <div className="col-md-4 col-lg-4 col-12">
              <h2> Name : {order.Name} </h2>
              <b> Email : {order.email} </b>
              <h6> Phone : {order.Phone} </h6>
              <p> Address : {order.address} </p>
            </div>
            <div className="col-md-4 col-lg-4 col-12">
              <h5>Status : {order.status} </h5>
              <Button className='me-5 mt-3 bg-danger' onClick={() => handleRemove(order._id)} >Remove</Button>
              <Button className='ms-5 mt-3' >Approved</Button>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default MyOrder;