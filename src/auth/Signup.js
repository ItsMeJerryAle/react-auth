import React from 'react'

import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup({
    setUser,
    setAuthState
}) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSignUpHandle = (e) => {
      e.preventDefault()

        if(email!== null && password !==null){
            createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setUser(user.user.email);
                setAuthState('dashboard')
            })
            .catch((err) => {
                alert(err)
            })
        }
    }

  return (
    <div>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up here
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none mb-2 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <p href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={onSignUpHandle}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Register
              </button>

              <button
                className="group relative mt-2 flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-stone-900 hover:bg-gray-100 focus:outline-none "
              >
                <img
                    className="flex mr-5 h-5 w-auto"
                    src="../google.png"
                    alt="Google logo"
                    />
                 Register in Google
              </button>
            </div>
            <div>
              <p className="mt-2 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button 
                  onClick={() => setAuthState('login')}
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
