import { Link } from 'react-router-dom';
import React from 'react';
import * as userService  from '../utilities/users-services'


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Welcome, {user.name} </span>&nbsp;&nbsp; 
      <Link to="/orders">Order History</Link>&nbsp;&nbsp; 
      <Link to="/orders/new">New Order</Link>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}