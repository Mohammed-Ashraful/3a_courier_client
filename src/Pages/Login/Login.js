import React from 'react';
import useAuth from '../../Hooks/useAuth';
const Login = () => {
  const handleGoogleSignIn = () => {
    
  }
  const {signInUsingGoogle} = useAuth();
  return (
    <div>
      <button onClick={signInUsingGoogle}>Google</button>
    </div>
  );
};

export default Login;