import './App.css';
import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewOrderPage from './pages/OrderHistoryPage';
import { getUser } from './utilities/users-services';

export default function App() {

  //grabs user info from localStorage
const [user, setUser]  = useState(getUser());

return (
  <main className="App">
    { user ?
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/*" element={<Navigate to='/orders/new' />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
  </main>
);
}
