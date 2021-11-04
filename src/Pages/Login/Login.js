import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Login = () => {

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || '/home';
  const { signInUsingGoogle } = useAuth();

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri);
    })
  }

  return (
    <div className='row m-0'>
      <div className='col-md-6 col-12 col-lg-6'>
        <img className='w-100' src={`https://i.ibb.co/prPH7hj/login.png`} alt="logo" />
      </div>
      <div className='pt-5 px-5 col-md-6 col-12 col-lg-6'>
        <h1 className=''>Please Login </h1>
        <button className='py-2 px-5 border border-0 rounded bg-warning text-white' onClick={handleGoogleSignIn}> <i class="fab fa-google"></i> Sign in Google</button>
      </div>
    </div>
  );
};

export default Login;