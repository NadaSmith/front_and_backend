import React from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import LogInForm from '../components/LogInForm/LogInForm';


export default function AuthPage({setUser}) {
  return (
    <main>
      <h1>AuthPage</h1>
      <h2>Sigh Up</h2>
      <SignUpForm setUser={setUser}/>
      <h2>Log In</h2>
      <LogInForm setUser={setUser}/>
    </main>
  );
}
