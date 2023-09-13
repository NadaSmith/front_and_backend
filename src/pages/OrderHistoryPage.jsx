import React from 'react';
import * as userService from '../utilities/users-services'

export default function OrderHistoryPage() {

    const handleCheckToken = async () => {
       const expDate = await userService.checkToken();
       console.log(expDate);
    }

    return (
        <div>
            <h1>Order History Page</h1>
            <button onClick={handleCheckToken}> Check When My Login Expires</button>
        </div>
    );
}
