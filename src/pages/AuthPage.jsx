import React from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import LogInForm from '../components/LogInForm/LogInForm';


export default function AuthPage({setUser}) {
  CONST [showLogin, setShowLogin] = useState(true);
  return (
    <main>
      <h1>AuthPage</h1>

      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}> {showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      

      {showLogin ? <loginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      
    </main>
  );
}
