import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Articles.css';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://young-fjord-77077.herokuapp.com/news')
      .then(res => res.json())
      .then(data => setArticles(data))
  }, [])
  // console.log(articles);
  return (
    <div className='row m-0 p-0 article-container'>
      <h1 className='py-5 text-primary'> Articles About our business strategy</h1>
      <div className="col-lg-6 col-md-12 col-12 m-0 p-5 ">
        <Col className='p-5'>
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

      <div className="col-lg-6 col-md-12 col-12 ">
        <div className="row m-0 p-0 ">

            <div className='container'>
              { articles?.map(article =>
                <Card className='p-0  news-container' style={{ width: '30rem' }}>
                  <Card.Img variant="top" src={article.img} className='img-fluid  news-img' />
                  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Button variant="primary">See more ...</Button>
                  </Card.Body>
                </Card>
                ) }
            </div>
          </div>
      </div>
    </div>
  );
};

export default Articles;