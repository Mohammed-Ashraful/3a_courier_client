import { useEffect, useState } from 'react';

import { getAuth, GoogleAuthProvider, signOut, signInWithPopup, onAuthStateChanged  } from 'firebase/auth';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const provider = new GoogleAuthProvider();
  
  const auth = getAuth();
  const signInUsingGoogle = () => {
    setIsLoading(true)
   return signInWithPopup(auth, provider)
    
  }
  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      setUser({})
    }).finally(() => setIsLoading(false))
  }


  useEffect(() => {
    setIsLoading(true)
    onAuthStateChanged(auth, users => {
      if (users) {
      // console.log('inside state changed' , users);
      setUser(users);
      }
      setIsLoading(false)
  })
  }, [])
  


  return {user,isLoading,signInUsingGoogle,logOut}
};

export default useFirebase;