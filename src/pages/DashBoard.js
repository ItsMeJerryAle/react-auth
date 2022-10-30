import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default function DashBoard({
  user, 
  setUser,
  setAuthState
}) {

  const signOutHandler = () => {
    signOut(auth)
    .then(() => {
      setUser(null);
      setAuthState('login');
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className='w-full max-w-md space-y-8'>
        <div className=' text-5xl font-bold text-center'>
          Home
        </div>
        
        
        <div>
          <p className='text-center'>{user}</p>
          <button
                  onClick={signOutHandler}
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign Out
                </button>
        </div>
        
      </div>
    </div>
  )
}
