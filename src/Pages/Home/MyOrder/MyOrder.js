import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './MyOrder.css'
const MyOrder = () => {
  const [singleOrder, setSingleOrder] = useState([]);
  const { user } = useAuth();

  const handleRemove = id => {
    const url = `http://localhost:5000/order/${id}`
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        window.confirm("R U SURE ")
        setSingleOrder(data)
      })
  }
  const handleStatus = (data) => {
    // console.log('data',data);
    // data.status = 'Approved';
    //    axios.post('https://young-fjord-77077.herokuapp.com/order', data)
    //   .then(res => res.json())
  }

  useEffect(() => {
    fetch('https://young-fjord-77077.herokuapp.com/order')
      .then(res => res.json())
      .then(data => setSingleOrder(data))
  }, [])
  const remaningOrder = singleOrder?.filter(myOrder => myOrder.email == user.email);
  return (
    <>
      <h1>MY Orders </h1>
      {
        remaningOrder?.map(order => <div className='m-0 row'>
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
              <Button className='me-5 mt-3 bg-danger' onClick={()=>handleRemove(order._id)} >Remove</Button>
              <Button className='ms-5 mt-3' onClick={handleStatus} >Approved</Button>
            </div>
          </div>
        </div>)
      }
    </>
  );
};

export default MyOrder;