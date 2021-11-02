import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Articles.css';



const Articles = () => {
  return (
    <div className='row m-0 p-0'>
      <div className="col-lg-6 col-md-6 col-12 m-0 p-0">
        <Col>
          <Card>
            <Card.Img variant="top" src={`https://i.ibb.co/xFfm1Ym/blog-01-1.jpg`} />
            <Card.Body>
              <Card.Title>All City Cafes and Restaurants Switched to Delivery Mode</Card.Title>

              <Card.Text>Food delivery has become an integral part of our lives. One third of all Americans say that they order food online at least twice per week. By 2023, the worldwide market for online food delivery is projected to hit $137 billion.

                In this article, we will closely examine the ins and outs of food delivery as a business model. How did it came to be? What are the pros and cons? How do you measure success in such a competitive market? These are some of the many questions that we will try to answer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
      <div className="col-lg-6 col-md-6 col-12">
        <div className="row m-0 p-0">
              <div className="col-lg-12 col-md-6 col-12">2222222
              </div>
              <div className="col-lg-12 col-md-6 col-12">3333333
              </div>
              <div className="col-lg-12 col-md-6 col-12">4444444
              </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;