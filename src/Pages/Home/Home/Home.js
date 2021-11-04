import React from 'react';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services />
      <Articles></Articles>
    </>
  );
};

export default Home;