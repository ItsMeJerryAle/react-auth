//import Login from './auth/Login';
import React from 'react';
import Signup from './auth/Signup';
import Login from './auth/Login';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import DashBoard from './pages/DashBoard';

function App() {
  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,
      async authenticatedUser => {
        if(authenticatedUser){
          setUser(authenticatedUser.email);
          setAuthState('dashboard');
        } else {
          setUser(null);
          setAuthState('login');
        }
      })

      return unsubscribe;
  }, [user])

  if(authState === null) return <div className='text-center text-5xl'>Please wait ...</div>  
  if(authState === 'login') return <Login setAuthState= {setAuthState} setUser={setUser} />  
  if(authState === 'register') return <Signup setAuthState= {setAuthState} setUser={setUser} />  
  if(user) return <DashBoard user={user} setAuthState= {setAuthState} setUser={setUser} />  
}

export default App;
