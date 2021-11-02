import { useEffect, useState } from 'react';

import { getAuth, GoogleAuthProvider, signOut, signInWithPopup, onAuthStateChanged  } from 'firebase/auth';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error,setError]=useState('')
  const provider = new GoogleAuthProvider();
  
  const auth = getAuth();
  const signInUsingGoogle = () => {
    
    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user)
    })
    .catch((error) => {
      setError(error);
    })
  }
  const logOut = () => { 
    signOut(auth).then(() => {
      
    }).catch((error) => {
      
    });
  }


  useEffect(() => {
    onAuthStateChanged(auth, users => {
      if (users) {
      console.log('inside state changed' , users);
      setUser(users);
    }
  })
  }, [])
  


  return {user,error,signInUsingGoogle,logOut}
};

export default useFirebase;