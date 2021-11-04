import React from 'react';
const NotFound = () => {
  return (
    <div className='text-center px-5' style={{ height: "62vh" }}>
      <h1 className="fs-1 pt-5">Ooops !</h1>
      <h1 style={{ fontSize: '150px', fontWeight: '900' }} className="text-danger not-found">404</h1>
      <b className="fs-4">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable
      </b>
    </div>
  );
};

export default NotFound;