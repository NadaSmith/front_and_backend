import React from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import LogInForm from '../components/LogInForm/LogInForm';
import { useState } from 'react';


export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LogInForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  )
}
